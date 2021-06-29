"use strict";

const Users = require("../collections/users");

function deleteUserCourse(req,res) {
    const index = Number(req.query.index);
    const userEmail= req.query.userEmail;
    // console.log(index);
    // console.log(userEmail);
    Users.findOne({email:userEmail},function(error,userCourses){
        if (error) {
            response.send(error)
        } else {
            userCourses.courses.splice(index ,1);
            console.log(userCourses.courses);
            userCourses.save();
            res.send(userCourses.courses)
        }

    })
}

module.exports= deleteUserCourse;