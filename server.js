require("dotenv").config();
const express = require("express");
const { mwfn1, mwfn2 } = require("./middlewares/myMiddleware");
const app = express();
const { body, validationResult } = require("express-validator");

const PORT = process.env.PORT || 4000;
app.use(express.json());

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message: "Something Went Wrong",
  });
});

// Application level middleware

app.use((req, res, next) => {
  // if (!(req.method === "GET")) {
  //   next();
  // } else {
  //   res.json({
  //     message: "Get Request is not Allowed",
  //   });
  // }
  next();
});

app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

app.post("/student", (req, res) => {
  res.status(200).json({
    message: "Hello World",
  });
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
app.post(
  "/students",
  body("email").isEmail(),
  body("password").isLength({ min: 4 }),
  (req, res) => {
    //   console.log(req.body);
    const errors = validationResult(req);
    console.log(errors.isEmpty());
    if (!errors.isEmpty()) {
      res.status(400).json({
        message: "Validation error",
        errors,
      });
    }
    res.status(200).json({
      message: "Hello from post",
      data: req.body,
    });
  }
);

app.listen(PORT, () => {
  console.log(`Server started at port no ${PORT}`);
});
