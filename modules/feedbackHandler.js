const Feedbacks = require("../collections/feedbacks");

function feedbackHandler(req, res) {
  const { userName, usercomment } = req.body;

  Feedbacks.find({}, (err, data) => {
    if (err) {
      res.status(500).send("There is an error");
    } else {
      data[0].feedbacks.push({
        name: userName,
        comment: usercomment,
      });

      data[0].save();
      res.send(data[0].feedbacks);
    }
  });
}

module.exports = feedbackHandler;
