const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("I am assignment");
  res.send("<h1>Hello world!</h1>");
});

app.listen(3000);
