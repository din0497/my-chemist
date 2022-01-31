// const express = require("express");

// const app = express();

// app.use('/add-product',(req, res, next) => {
//   res.send("<h1>THE ADD PRODUCT!</h1>");
// });

// app.use('/',(req, res, next) => {
//   res.send("<h1>Hello from Express!</h1>");
// });

// app.listen(3000);

const express = require("express");
const req = require("express/lib/request");

const app = express();

// app.use((req, res, next) => {
//     console.log("I am assignment");
//     next()
//   });

// app.use((req, res, next) => {
//   console.log("I am assignment2");
//   res.send("<h1>Hello world!</h1>");
// });
app.use('/users',(req,res, next) => {
    console.log('/users middleware');
    res.send("<p>/////users</p>")
})


app.use('/',(req,res, next) => {
    console.log('/ middleware');
    res.send("<p>/////</p>")
})


app.listen(3000);