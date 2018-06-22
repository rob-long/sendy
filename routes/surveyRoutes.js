const requireLogin = require("../middlewares/requireLogin");
const hasCredit = require("../middlewares/hasCredit");

module.exports = app => {
  app.get("/api/surveys", (req, res) => {
    const user = req.user;
    res.send("ok!");
  });

  app.get("/api/survey", requireLogin, hasCredit(1), (req, res) => {
    res.send("good job!");
  });
};
