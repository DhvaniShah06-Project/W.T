const http = require("http");
const fs = require("fs");

const app = http.createServer((req, res) => {
  if (req.url == "/home.html") {
    fs.readFile("./home.html", (err, data) => {
      if (err) {
        res.statusCode = 404;
        res.end("Page Not Found");
      } else {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.end(data);
      }
    });
  } else if (req.url == "/about.html") {
    fs.readFile("./about.html", (err, data) => {
      if (err) {
        res.statusCode = 404;
        res.end("Page Not Found");
      } else {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.end(data);
      }
    });
  } else if (req.url == "/contact.html") {
    fs.readFile("./contact.html", (err, data) => {
      if (err) {
        res.statusCode = 404;
        res.end("Page Not Found");
      } else {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.end(data);
      }
    });
  } else if (req.url == "/profile.html") {
    fs.readFile("./profile.html", (err, data) => {
      if (err) {
        res.statusCode = 404;
        res.end("Page Not Found");
      } else {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.end(data);
      }
    });
  } else if (req.url == "/ProductCrud") {
    fs.readFile("./ProductCrud.html", (err, data) => {
      if (err) {
        res.statusCode = 404;
        res.end("Page Not Found");
      } else {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.end(data);
      }
    });
  } else {
    res.end("Page Not Found");
  }
});

app.listen(3400, () => {
  console.log("Server Properly Runned");
});
