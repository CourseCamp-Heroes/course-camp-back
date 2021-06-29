"use strict";

//////////////////////////////////////////// imports ///////////////////////////////////////////
require("dotenv").config();
const cors = require("cors");
const express = require("express");
const getBlogHandler = require("./modules/getBlogHandler");

const server = express();
server.use(cors());
server.use(express.json()); // to read POST request as json (if don't use it you will have undefiend)

const PORT = process.env.PORT;

const allCoursesHandler = require("./modules/allCoursesHandler");
const feedbackHandler = require("./modules/feedbackHandler");
const getfeedbackHandler = require("./modules/getfeedbackHandler");
const addUserCourse = require("./modules/addUserCourse");
const getUserCourses = require("./modules/getUserCourses");
const updateCourseEnrollCount = require("./modules/updateCourseEnrollCount");
const getAllUserData = require("./modules/getAllUserData");
const addUserFav = require("./modules/addUserFav");
const getUserFavs = require("./modules/getUserFavs");
const updateCourseReviewCount = require("./modules/updateCourseReviewCount");
////////////////////////////////////////////// routes ///////////////////////////////////////

//localhost:3001/updateCourseReviewCount
server.put("/updateCourseReviewCount", updateCourseReviewCount);

//localhost:3001/getuserfavs
server.get("/getuserfavs", getUserFavs);

//localhost:3001/adduserfav
server.post("/adduserfav", addUserFav);

//localhost:3001/getAllUserData
server.get("/getAllUserData", getAllUserData);

//localhost:3001/updateCourseEnrollCount
server.put("/updateCourseEnrollCount", updateCourseEnrollCount);

//localhost:3001/getusercourses
server.get("/getusercourses", getUserCourses);

//localhost:3001/addusercourse
server.post("/addusercourse", addUserCourse);

//localhost:3001/addComment
server.post("/addComment", feedbackHandler);

//localhost:3001/getComment
server.get("/getComment", getfeedbackHandler);

//localhost:3001/allcourses
server.get("/allcourses", allCoursesHandler);

//localhost:3001
server.get("/blog", getBlogHandler);

//localhost:3001
server.get("/", homeHandler);

//localhost:3001/*
server.get("*", notfoundHandler);

//////////////////////////////////////////// functions //////////////////////////////////////

function homeHandler(req, res) {
  res.send("Home page");
}

function notfoundHandler(req, res) {
  res.status(404).send("Page Not found");
}

/////////////////////////////////////////// listen ///////////////////////////////////////////

server.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});

//////////////////////////////////////users dummy////////////////////////////////////////////

// const Users = require("./collections/users");

// function homeHandler(req, res) {
//   let obj1 = new Users({
//     email: "rralakhras@gmail.com",
//     courses: [
//       {
//         title: "Intro to AJAX",
//         img: "https://d20vrrgs8k4bvw.cloudfront.net/images/courses/thumbnails/ud110_thumbnail.jpg",
//         subtitle: "Making Asynchronous Requests with jQuery",
//       },
//       {
//         title: "Introduction to Python Programming",
//         img: "https://d20vrrgs8k4bvw.cloudfront.net/images/course-catalog/en-us/catalog-img-ud1110.png",
//         subtitle: "Learn to solve practical problems with Python",
//       },
//     ],
//     favs: [
//       {
//         title: "Intro to Relational Databases",
//         img: "https://d20vrrgs8k4bvw.cloudfront.net/images/courses/thumbnails/ud197_thumbnail.jpg",
//       },
//       {
//         title: "Networking for Web Developers",
//         img: "https://d20vrrgs8k4bvw.cloudfront.net/images/courses/thumbnails/ud256_thumbnail.jpg",
//       },
//     ],
//     reviews: [
//       {
//         username: "Rawan Alakhras",
//         title: "Intro to Relational Databases",
//         rate: 3,
//         comment: "good course",
//       },
//     ],
//   });

//   obj1.save();
// }

///////////////////////////////////////////test initilize courses on DB //////////////////////////////////////////////
// const Courses = require("./collections/courses");
// const axios = require("axios");

// function homeHandler(req, res) {
//   class Data {
//     constructor(item) {
//       (this.title = item.title),
//         (this.shortSummary = item.short_summary),
//         (this.summary = item.summary),
//         (this.subtitle = item.subtitle),
//         (this.duration = `${item.expected_duration} weeks`),
//         (this.image = item.image),
//         (this.level = item.level),
//         (this.syllabus = item.syllabus),
//         (this.instructors = item.instructors),
//         (this.expectedLearning = item.expected_learning),
//         (this.skills = item.metadata.skills),
//         (this.tags = item.tags),
//         (this.tracks = item.tracks),
//         (this.enrollCount = 0),
//         (this.rate = 0),
//         (this.reviewCount = 0);
//     }
//   }

//   let url = "https://catalog-api.udacity.com/v1/courses";

//   axios.get(url).then((data) => {
//     let newdata = data.data.courses
//       .filter((course) => {
//         return (
//           course.image &&
//           course.instructors &&
//           course.required_knowledge &&
//           course.expected_learning &&
//           course.tracks.includes("Web Development")
//         );
//       })
//       .map((course) => {
//         return new Data(course);
//       });

//     const course = new Courses({ courses: newdata });
//     course.save();

//     res.send(newdata);
//   });
// }
