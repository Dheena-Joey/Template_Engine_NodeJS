const express = require("express");
// import express as 'express';
const { rootDir } = require("./utils/path.js");
const app = express();
const path = require("path");
// const courses = ["JAVA", "RUBY", "C++", "PYTHON", "C#", "Javascript"];
const courses = [];

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "pug");

app.get("/", (req, res) => {
  //   res.status(200).sendFile(path.join(rootDir, "views", "homePage.html"));
  res.status(200).render("homePage", {
    docTitle: "Home Page",
  });
});

app.get("/about", (req, res) => {
  // res.status(200).sendFile(path.join(rootDir, "views", "about.html"));
  res.status(200).render("about", {
    docTitle: "about",
  });
});

app.get("/reports", (req, res) => {
  // res.status(200).sendFile(path.join(rootDir, "views", "reports.html"));
  res.status(200).render("reports", {
    courses,
    docTitle: "Reports",
  });
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000, () => {
  console.log(`PORT running at port 3000`);
});

// const adminRoute = require("./routes/admin.routes.js");
// const shopRoute = require("./routes/shop.routes.js");
// app.use("/api/shop", shopRoute);
// app.use("/api/admin", adminRoute);

// app.get("/", (req, res) => {
//   //   res.status(200).sendFile(path.join(rootDir, "views", "homePage.html"));
//   res.status(200).render("homePage", {
//     docTitle: "Hello world",
//   });
// });
