"use strict";

//////////////////////////////////////////// imports ///////////////////////////////////////////
require("dotenv").config();
const cors = require("cors");
const express = require("express");
const getBlogHandler = require('./modules/getBlogHandler');

const server = express();
server.use(cors());
server.use(express.json()); // to read POST request as json (if don't use it you will have undefiend)

const PORT = process.env.PORT;

////////////////////////////////////////////// routes ///////////////////////////////////////
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

// ///////////////////////////////////////////test initilize courses on DB //////////////////////////////////////////////
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
//         (this.requiredKnowledge = item.required_knowledge),
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
