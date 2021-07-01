"use strict";

const Users = require("../collections/users");

function addUser(req, res) {
  const { email } = req.body;
  Users.find({ email }, (err, data) => {
    if (data.length == 0) {
      let newuser = new Users({
        email: email,
      });
      newuser.save();
      console.log("user added");
      res.send("user added");
    } else {
      console.log("user exsit");
      res.send("user exist");
    }
  });
}

module.exports = addUser;
