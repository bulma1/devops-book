const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Fundamentals of DevOps!');
});

module.exports = app;
