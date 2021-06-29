"use strict";

const Users = require("../collections/users");

function getUserFavs(req, res) {
  let email = req.query.email;
  Users.find({ email }, (err, data) => {
    if (err) {
      res.status(500).send("There is an error");
    } else {
      res.send(data[0].favs);
    }
  });
}

module.exports = getUserFavs;
