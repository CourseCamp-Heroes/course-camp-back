"use strict";

const Courses = require("../collections/courses");

function allCoursesHandler(req, res) {
  Courses.find({}, (err, data) => {
    if (err) {
      res.status(500).send("there is and error");
    } else {
      res.send(data[0].courses);
    }
  });
}

module.exports = allCoursesHandler;
