"use strict";

require("dotenv").config();
const mongoose = require("mongoose");
const MONGO_URL = process.env.MONGODB_URI;

mongoose.connect(`${MONGO_URL}/projectDB`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// schemas:
const feedbacks = new mongoose.Schema({
  name: String,
  Comment: String,
  date: {
    type: Date,
    default: Date.now,
  },
});

// modals:
const Feedbacks = mongoose.model("feedback", feedbacks);

module.exports = Feedbacks;
