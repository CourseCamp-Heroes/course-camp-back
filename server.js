"use strict";

//////////////////////////////////////////// imports ///////////////////////////////////////////
require("dotenv").config();
const cors = require("cors");
const express = require("express");

const server = express();
server.use(cors());
server.use(express.json()); // to read POST request as json (if don't use it you will have undefiend)

const PORT = process.env.PORT;

////////////////////////////////////////////// routes ///////////////////////////////////////
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
