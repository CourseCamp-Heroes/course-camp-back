"use strict";

const Users = require("../collections/users");

function addUserFav(req, res) {
  const { email, title, img } = req.body;

  Users.find({ email }, (err, data) => {
    if (err) {
      res.status(500).send("there is error");
    } else {
      data[0].favs.push({
        title: title,
        img: img,
      });

      // console.log(data[0]);
      data[0].save();
      res.send(data[0].favs);
    }
  });
}

module.exports = addUserFav;
