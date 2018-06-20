const express = require('express');
// we only need to run the passport configuration file, there is nothing to use
require('./services/passport');

const app = express();


app.get('/', (req, res) => {
  res.send({ hi: keys.googleClientSecret });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
