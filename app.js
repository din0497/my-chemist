const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/me") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title> My first node </title></head?");
    res.write("<body><h1> Hello from my Node js</h1></body>");
    res.write("</html>");
    res.end();
  }
});

server.listen(3000);
