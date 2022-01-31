const express = require("express");
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded())

app.use("/", (req, res, next) => {
  next();
});
app.use("/add-product", (req, res, next) => {
  res.send(
    "<form action='/product' method='POST'><input type='text' name='title'/><button type='submit'>Submit</button></form>"
  );
});

app.use("/product", (req, res, next) => {
 console.log(req.body)
    res.redirect("/");
});

app.use("/", (req, res, next) => {
  res.send("<h1>Hello from Express!</h1>");
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
