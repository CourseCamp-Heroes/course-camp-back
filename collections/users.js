require("dotenv").config();
const mongoose = require("mongoose");
const MONGO_URL = process.env.MONGODB_URI;

mongoose.connect(`${MONGO_URL}/projectDB`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// SCHEMAS

// MODALS