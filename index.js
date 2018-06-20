const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const passport = require('passport');
const cookieSession = require('cookie-session');
// we only need to run the passport configuration file, there is nothing to use
require('./models/User');
require('./services/passport');
// const authRoutes = require('./routes/authRoutes');

mongoose.connect(keys.mongoURI);
console.log(keys.mongoURI);

const app = express();

app.use(cookieSession({
  maxAge: 30 * 24 * 60 * 60 * 1000,
  keys: [keys.cookieKey],
}));
app.use(passport.initialize());
app.use(passport.session());

// more direct way of require authRoutes
// authRoutes returns a function which we invoke immediately
require('./routes/authRoutes')(app);

app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);