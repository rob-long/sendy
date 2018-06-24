const mongoose = require("mongoose");
require("../models/Survey");
const requireLogin = require("../middlewares/requireLogin");
const hasCredit = require("../middlewares/hasCredit");
const Mailer = require("../services/Mailer");
const Survey = mongoose.model("surveys");

module.exports = app => {
  app.get("/api/surveys/thanks", (req, res) => {
    const user = req.user;
    res.send("Thanks for your response!");
  });

  app.post("/api/surveys", requireLogin, hasCredit(1), async (req, res) => {
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

    try {
      const mailer = new Mailer(survey, body);
      await mailer.send();
      await survey.save();
      req.user.credits -= 1;
      const user = await req.user.save();
      res.send(user);
    } catch (err) {
      console.log("error!", err);
      res.status(422).send(err);
    }
  });
};

/*
curl --header "Content-Type: application/json" --request POST --data '{"title":"hello world","subject":"hi molly","body":"i am sorry","recipients":"johndoe@exware.com"}' http://localhost:3000/api/surveys
*/
