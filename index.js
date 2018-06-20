const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
// we only need to run the passport configuration file, there is nothing to use
require('./services/passport');
// const authRoutes = require('./routes/authRoutes');

mongoose.connect(keys.mongoURI);
console.log(keys.mongoURI);

const app = express();

// more direct way of require authRoutes
// authRoutes returns a function which we invoke immediately
require('./routes/authRoutes')(app);

app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
