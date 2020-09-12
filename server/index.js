const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('../db');
const PORT = 3033;

const app = express();

app.use(express.static(path.join(__dirname, '/../client/dist')));

app.get('/users', function (req, res) {
  db.getAllUsers(function (err, data) {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.listen(PORT, function () {
  console.log(`listening on port ${PORT}!`);
});
