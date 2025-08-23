const express = require("express");
const { rootDir } = require("./utils/path.js");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "pug");

app.get("/", (req, res) => {
  //   res.status(200).sendFile(path.join(rootDir, "views", "homePage.html"));
  res.status(200).render("homePage", {
    docTitle: "Hello world",
  });
});

app.get("/about", (req, res) => {
  res.status(200).sendFile(path.join(rootDir, "views", "about.html"));
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000, () => {
  console.log(`PORT running at port 5000`);
});

// const adminRoute = require("./routes/admin.routes.js");
// const shopRoute = require("./routes/shop.routes.js");
// app.use("/api/shop", shopRoute);
// app.use("/api/admin", adminRoute);
