"use strict";

const Courses = require("../collections/courses");

function decreaseReviewCount(req, res) {
  let title = req.body.title;

  Courses.find({}, (err, data) => {
    let index = data[0].courses.findIndex((elem) => {
      return elem.title == title;
    });

    let obj = data[0].courses[index];

    console.log(data[0].courses[index].reviewCount);
    data[0].courses.splice(index, 1, {
      ...obj,
      reviewCount: obj.reviewCount - 1,
    });

    console.log("decrease review");
    console.log(data[0].courses[index].reviewCount);
    data[0].save(); // here saving the whole documnet
    res.send(data[0].courses);
  });
}

module.exports = decreaseReviewCount;
