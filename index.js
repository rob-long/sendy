const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const passport = require("passport");
const cookieSession = require("cookie-session");
// we only need to run the passport configuration file, there is nothing to use
require("./models/User");
require("./services/passport");
// const authRoutes = require('./routes/authRoutes');

mongoose.connect(keys.mongoURI);
console.log(keys.mongoURI);

const app = express();

// middlewares that operate on requests before being passed to express
app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

// more direct way of require authRoutes
// authRoutes returns a function which we invoke immediately with our express app
require("./routes/authRoutes")(app);
require("./routes/billingRoutes")(app);

if (process.env.NODE_ENV === "production") {
  // heroku specific
  // express  will serve production assets
  // like main js or main.css
  app.use(express.static("/client/build"));

  // just serve index.html as a last resort
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
