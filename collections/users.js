"use strict";

require("dotenv").config();
const mongoose = require("mongoose");
const MONGO_URL = process.env.MONGODB_URI;

mongoose.connect(`${MONGO_URL}/projectDB`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// schemas:
const course = new mongoose.Schema({
  title: String,
  img: String,
  shortSummary: String,
});

const fav = new mongoose.Schema({
  title: String,
  img: String,
});

const review = new mongoose.Schema({
  username: String,
  title: String,
  comment: String,
  date: {
    type: Date,
    default: Date.now,
  },
});

const users = new mongoose.Schema({
  email: String,
  courses: [course],
  favs: [fav],
  reviews: [review],
});

// modals
const Users = mongoose.model("user", users);

module.exports = Users;
