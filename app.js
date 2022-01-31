const express = require("express");

const app = express();

app.use("/add-product", (req, res, next) => {
  res.send("<h1>THE ADD PRODUCT!</h1>");
});

app.use("/", (req, res, next) => {
  res.send(
    "<form action='/product' method='POST'><input type='text' name='title'/><button type='submit'>Submit</button></form>"
  );
});

app.listen(3000);

// const express = require("express");
// const req = require("express/lib/request");

// const app = express();

// app.use('/users',(req,res, next) => {
//     console.log('/users middleware');
//     res.send("<p>/////users</p>")
// })

// app.use('/',(req,res, next) => {
//     console.log('/ middleware');
//     res.send("<p>/////</p>")
// })

// app.listen(3000);
