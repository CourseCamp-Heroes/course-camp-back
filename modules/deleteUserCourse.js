"use strict";

const Users = require("../collections/users");

function deleteUserCourse(req, res) {
  const index = Number(req.query.index);
  const userEmail = req.query.userEmail;

  Users.findOne({ email: userEmail }, function (error, userCourses) {
    if (error) {
      res.status(500).send("there is an error");
    } else {
      userCourses.courses.splice(index, 1);

      userCourses.save();
      console.log("delete");
      res.send(userCourses.courses);
    }
  });
}

module.exports = deleteUserCourse;
