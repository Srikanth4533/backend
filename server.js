const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Hello World");
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
  console.log(req.query);
  res.status(200).json({
    success: true,
    data: req.query,
  });
});

// app.post("/hello", (req, res) => {
//   res.status(200).json({
//     message: "Hello from post",
//   });
// });

app.listen(4000, () => {
  console.log(`Server started at port no 4000`);
});
