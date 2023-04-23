const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const path = require("path");
const app = express();

app.use(expressLayouts);
app.set("layout", "./layouts/master");
// set the view engine to ejs
app.set("view engine", "ejs");

// static files
app.use("/static", express.static(path.join(__dirname, "public")));

// index page
app.get("/", function (req, res) {
  res.render("pages/index");
});

// about page
app.get("/about", function (req, res) {
  res.render("pages/about", {
    layout: "./layouts/page",
  });
});

const message = "Welcome to Menu!";
const items = [
  {
    id: 1,
    title: "Item 1",
    description: "This is item 1 description.",
  },
  {
    id: 2,
    title: "Item 2",
    description: "This is item 2 description.",
  },
  {
    id: 3,
    title: "Item 3",
    description: "This is item 3 description.",
  },
];

// menu page
app.get("/menu", function (req, res) {
  res.render("pages/menu", {
    layout: "./layouts/page",
    message,
    items,
  });
});

// gallery page
app.get("/gallery", function (req, res) {
  res.render("pages/gallery", {
    layout: "./layouts/page",
  });
});

// contact page
app.get("/contact", function (req, res) {
  res.render("pages/contact", {
    layout: "./layouts/page",
  });
});

// login page
app.get("/login", function (req, res) {
  res.render("pages/login", {
    layout: "./layouts/auth",
  });
});

app.listen(process.env.PORT || 3000);
console.log("Server is listening on port 3000");
