const mongoose = require("mongoose");
require("../models/Survey");
const requireLogin = require("../middlewares/requireLogin");
const hasCredit = require("../middlewares/hasCredit");

const Survey = mongoose.model("surveys");

module.exports = app => {
  app.get("/api/surveys", (req, res) => {
    const user = req.user;
    res.send("ok!");
  });

  app.post("/api/surveys", (req, res) => {
    const { title, subject, body, recipients } = req.body;
    const recipientList = recipients.split(",").map(e => {
      return { email: e };
    });

    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipientList,
      _user: req.user.id,
      dateSent: Date.now()
    });
    res.send(recipientList);
  });
};

/*
curl --header "Content-Type: application/json" --request POST --data '{"title":"hello world","subject":"hi molly","body":"i am sorry","recipients":"molly@exware.com,aland@exware.com,morgan@exware.com"}' http://localhost:3000/api/surveys
*/
