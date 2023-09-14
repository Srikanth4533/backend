const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/sri", (req, res) => {
  res.send("Hello Srikanth");
});

app.listen(4000, () => {
  console.log(`Server started at port no 4000`);
});
