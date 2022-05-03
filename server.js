const http = require("http");

var express = require("express");
var favicon = require("serve-favicon");
var app = express();

app.use(favicon(__dirname + "/public/images/favicon.ico"));

let requestCount2 = 0;
const server = http.createServer((request, response) => {
  requestCount2++;
  switch (request.url) {
    case "/student":
      response.write("Student " + requestCount2);
      break;
    case "/maktab":
      response.write("maktab " + requestCount2);
      break;
    default:
      response.write("404");
  }
  console.log(request.url);
  response.write("Coder Girl Robiya " + requestCount2);
  response.end();
});
server.listen(3003);
