const http = require("http");
const ldap = require("ldapjs");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

const client = ldap.createClient({
  url: "ldap://han-dc01.gameloft.org:389",
  connectTimeout: 30000,
  reconnect: true,
});

try {
  client.bind("trung.nguyenduc2@gameloft.com", "byebye@2021");
} catch (e) {
  console.log("Bind failed");
}

if (client.connected == true) {
  console.log("Connected");
}

client.on("error", (err) => {
  console.log(err);
});
