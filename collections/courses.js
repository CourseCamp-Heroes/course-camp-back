"use strict";

require("dotenv").config();
const mongoose = require("mongoose");
const MONGO_URL = process.env.MONGODB_URI;

mongoose.connect(`${MONGO_URL}/projectDB`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// schemas:
const courses = new mongoose.Schema({
  courses: Array,
});

// modals:
const Courses = mongoose.model("course", courses);

module.exports = Courses;
