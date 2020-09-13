const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('../db/index.js');

const app = express();
const PORT = 3033;

const fakeData = require('./../db/fakeData.js');

app.use(express.static(path.join(__dirname, '/../client/dist')));

app.use(express.json());

app.get('/users', (req, res) => {
  console.log('got a GET in server')
  // res.status(200).send(fakeData.users);

  // FUNTION TO DATABASE TO GET ALL USERS
  db.User.find({}, (err, users) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(users);
    }
  });
});

app.listen(PORT, (err) => {
  console.log(`listening on port ${PORT}!`);
});
