"use strict";

const Users = require("../collections/users");

function addUserCourse(req, res) {
  const { email, title, img, subtitle } = req.body;

  Users.find({ email }, (err, data) => {
    if (err) {
      res.status(500).send("there is error");
    } else {
      data[0].courses.push({
        title: title,
        img: img,
        subtitle: subtitle,
      });

      // console.log(data[0]);
      data[0].save();
      res.send(data[0].courses);
    }
  });
}

module.exports = addUserCourse;
