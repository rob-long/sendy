const mongoose = require("mongoose");
const keys = require("./config/keys");
require("./models/Survey");
const Survey = mongoose.model("surveys");

mongoose.connect(keys.mongoURI);

// find each survey with a last name matching 'Ghost'
var query = Survey.findOne({ title: "Multiple" });

// selecting the `name` and `occupation` fields
query.select("title subject body");

// execute the query at a later time
query.exec(function(err, survey) {
  console.log(survey);
  if (err) return handleError(err);
  // Prints "Space Ghost is a talk show host."
  console.log("%s %s is a %s.", survey.title, survey.subject, survey.body);
  return;
});
