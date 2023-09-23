const express = require("express");
const app = express();

app.use(express.json());

require("dotenv").config();

const { check, validationResult } = require("express-validator");

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Home Page",
  });
});

app.post(
  "/students",
  check("password")
    .isLength({ min: 4 })
    .withMessage("must be at least 5 chars long")
    .matches(/\d/)
    .withMessage("must contain a number"),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({
        message: "Validation Failed",
        error: errors.array(),
      });
    }
    res.status(200).json({
      success: true,
      message: "OK",
    });
  }
);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
