const Feedbacks = require("../collections/feedbacks");

function getfeedbackHandler(req, res) {
  Feedbacks.find({}, (err, data) => {
    if (err) {
      res.status(500).send("There is an error");
    } else {
      res.send(data[0].feedbacks);
    }
  });
}

module.exports = getfeedbackHandler;
