const ldap = require("ldapjs");

const { LDAP_URL } = process.env;

const ldapClient = ldap.createClient({
  url: LDAP_URL,
  reconnect: true,
});

ldapClient.on("error", (err) => {
  console.log("Connect fail: " + err);
});

ldapClient.on("connect", (res) => {
  console.log("Connect success");
});

function authUser(username, password) {
  return new Promise((resolve, reject) => {
    ldapClient.bind(username, password, (err, data) => {
      if (err) {
        console.log("Bind fail: " + err);
        reject(err);
      } else {
        console.log("Bind success");
        resolve(data);
      }
    });
  });
}

module.exports = { authUser };
