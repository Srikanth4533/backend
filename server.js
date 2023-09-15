require("dotenv").config();
const express = require("express");
const { mwfn1, mwfn2 } = require("./middlewares/myMiddleware");
const app = express();

const PORT = process.env.PORT || 4000;
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

// Middleware Functions

app.get(
  "/middleware",
  mwfn1,
  (req, res, next) => {
    console.log("Middleware Called");
    req.query.name = req.query.name.toUpperCase();
    req.sri = "srikanth sri";
    next();
  },
  mwfn2,
  (req, res) => {
    res.json({
      success: true,
      message: "Hello World From Middleware",
      name: req.sri,
      data: req.query,
    });
  }
);

app.post("/middleware", mwfn1, mwfn2, (req, res) => {
  res.status(200).json({
    success: true,
    message: req.body,
  });
});

// object.method(routename, cbfn)
app.get("/about", (req, res) => {
  // object.method().method()
  res.status(200).send("About Page");
});

app.get("/sri", (req, res) => {
  res.status(200).send("Hello Srikanth");
});

app.get("/hello", (req, res) => {
  //   console.log(req.query);
  res.status(200).json({
    success: true,
    data: req.query,
  });
});

// URL segment
app.get("/students/:std", (req, res) => {
  //   console.log(req.params);
  res.status(200).json({
    message: "Hello from post",
    data: req.params,
  });
});

// Body
app.post("/students", (req, res) => {
  //   console.log(req.body);
  res.status(200).json({
    message: "Hello from post",
    data: req.body,
  });
});

app.listen(PORT, () => {
  console.log(`Server started at port no ${PORT}`);
});
