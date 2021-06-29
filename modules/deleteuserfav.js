"use strict";

const Users = require("../collections/users");

function deleteuserfav(req, res) {
  const index = Number(req.query.index);
  const userEmail = req.query.userEmail;

  Users.findOne({ email: userEmail }, function (error, userCourses) {
    if (error) {
      res.status(500).send("there is an error");
    } else {
      userCourses.favs.splice(index, 1);
      userCourses.save();
      res.send(userCourses.favs);
    }
  });
}

module.exports = deleteuserfav;
