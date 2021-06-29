"use strict";

const Courses = require("../collections/courses");

function decreaseEnrollCount(req, res) {
  let title = req.body.title;

  Courses.find({}, (err, data) => {
    let index = data[0].courses.findIndex((elem) => {
      return elem.title == title;
    });
    // console.log(data[0].courses[index].enrollCount);

    let obj = data[0].courses[index];

    data[0].courses.splice(index, 1, {
      ...obj,
      enrollCount: obj.enrollCount - 1,
    });
// console.log(data[0].courses[index].enrollCount);
    data[0].save(); // here saving the whole documnet
    res.send(data[0].courses);
  });
}

module.exports = decreaseEnrollCount;
