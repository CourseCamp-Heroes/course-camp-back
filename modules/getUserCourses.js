"use strict";

const Users = require("../collections/users");

function getUserCourses(req, res) {
  let email = req.query.email;
  Users.find({ email }, (err, data) => {
    if (err) {
      res.status(500).send("There is an error");
    } else {
      console.log("get");
      res.send(data[0].courses);
    }
  });
}

module.exports = getUserCourses;
