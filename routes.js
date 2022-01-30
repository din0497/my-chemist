// const fs = require("fs");

// const requestHandler = (req, res) => {
//   const url = req.url;
//   const method = req.method
//   if (url === "/") {
//     res.write("<html>");
//     res.write("<head><title> me page</title></head?");
//     res.write(
//       "<body><form action='/message' method='POST'><input type='text' name='message'/><button type='submit'>submit</button</form></body>"
//     );
//     res.write("</html>");
//     return res.end();
//   }
//   if (url === "/message" && method === "POST") {
//     const body = [];
//     req.on("data", (chunk) => {
//       console.log(chunk);
//       body.push(chunk);
//     });
//     req.on("end", () => {
//       const parsedBody = Buffer.concat(body).toString();
//       const message = parsedBody.split("=")[1];
//       fs.writeFileSync("message.txt", message, (err) => {
//         res.statusCode = 302;
//         res.setHeader("Locaton", "/");
//         return res.end();
//       });
//     });
//   }
//   res.setHeader("Content-Type", "text/html");
//   res.write("<html>");
//   res.write("<head><title> My first node </title></head?");
//   res.write("<body><h1> Hello from my Node js</h1></body>");
//   res.write("</html>");
//   res.end();
// };
// module.exports = requestHandler;

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(
      "<html > <head> <title>Assignment!</title></head><body><h1>Hello world, i am learning Node.js</h1><form action='create-user' method='POST'><input type='text' name='users'><button type='submit'>Submit</button></form></body></html>"
    );
    return res.end();
  }
  if (url === "/users") {
    res.write(
      "<html > <head> <title>Assignment!</title></head><body><ul><li>User1</li><li>User2</li><li>User3</li></ul></body></html>"
    );
    return res.end();
  }

  if (url === "/create-user" && method === "POST") {
    const body = [];

    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      console.log({ parsedBody, message });
      return res.end();
    });
    res.statusCode = 302;
    res.setHeader("Location", "/");
    res.end();
  }
};

module.exports = requestHandler;
