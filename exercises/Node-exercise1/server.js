"use strict";
const moments = require("..node_modules/moment");
const http = require("http");
const port = 8888;

http.createServer((req, res) => {
    const currentDate = moment().format("dddd [at] h:mma");
// use the following code to format the date that you respond with:
// moment().format("dddd [at] h:mma")
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write(currentDate);
    res.end();
  })
  .listen(port);
console.log("Listening on port http://localhost:" + port);