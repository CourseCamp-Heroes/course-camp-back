"use strict";

const Users = require("../collections/users");

function getAllUserData(req, res) {
  let email = req.query.email;

  Users.find({ email }, (err, data) => {
    if (err) {
      res.status(500).send("there is an error");
    } else {
      res.send(data);
    }
  });
}

module.exports = getAllUserData;
