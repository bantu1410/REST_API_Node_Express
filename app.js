/* eslint linebreak-style: ["error", "windows"] */

const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('welcome to my Nodemon api');
});

app.listen(port, () => {
  console.log(`running on port ${port}`);
});
