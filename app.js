require("dotenv").config();
const http = require("http");

const { connect } = require("./ldap-communication");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World");
});

server.listen(port, hostname, async () => {
  try {
    await connect();
    console.log(`Listening to request on http://${hostname}:${port}/`);
  } catch (error) {
    console.log(error);
  }
});
