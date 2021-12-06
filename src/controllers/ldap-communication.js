const ldap = require("ldapjs");

const { LDAP_URL } = process.env;

let ldapClient;

function authUser(client, username, password) {
  return new Promise((resolve, reject) => {
    client.bind(username, password, (err) => {
      if (err) {
        reject(new Error("Authentication failed!"));
      } else {
        resolve(client);
        console.log("trung2");
      }
    });
  });
}

function connect() {
  return new Promise((resolve, reject) => {
    if (!ldapClient) {
      ldapClient = ldap.createClient({
        url: [LDAP_URL],
        reconnect: true,
      });
      ldapClient.on("connect", async (res) => {
        // const user = getCredential();
        // It can fetch user details
        console.log("trung");
        if (true) {
          await authUser(
            ldapClient,
            "trung.nguyenduc2@gameloft.com",
            "byebye@2021"
          );
        }
        searchUser(ldapClient);
        resolve(res);
      });
      ldapClient.on("connectError", (error) => {
        reject(error);
      });
    } else {
      reject(new Error("LDAP client already connected"));
    }
  });
}

function searchUser(client) {
  return new Promise((resolve, reject) => {
    client.search("dc=gameloft,dc=com", (err, res) => {
      if (err) {
        reject(new Error("Search failed!"));
      } else {
        resolve(client);
        console.log("trung3");
      }
      res.on("searchRequest", (searchRequest) => {
        console.log("searchRequest: ", searchRequest.messageID);
      });
      res.on("searchEntry", (entry) => {
        console.log("entry: " + JSON.stringify(entry.object));
      });
      res.on("searchReference", (referral) => {
        console.log("referral: " + referral.uris.join());
      });
      res.on("error", (err) => {
        console.error("error: " + err.message);
      });
      res.on("end", (result) => {
        console.log("status: " + result.status);
      });
    });
  });
}
module.exports = { connect };
