const mongoose = require('mongoose');
const fakeData = require('./fakeData.js')

mongoose.connect('mongodb://localhost/reaction_time');


const userSchema = mongoose.Schema({
  userName: {
    type: String,
    unique: true
  },
  personalBest: Number,
  allTimes: Array
});

const User = mongoose.model('User', userSchema);

module.exports = { User };

// SEED DATABASE WITH FAKE USERS DATA
// const insetUsers = (data) => {
//   data.forEach((user) => {
//     let file = new User(user);
//     file.save((err) => {
//       if (err) {
//         console.log('err saving in db', err);
//       } else {
//         console.log('user saved')
//       }
//     });
//   });
// };

// insetUsers(fakeData.users);

// TO CLEAR ALL DATA
// User.remove({}, (err) => {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log('files matching {} removed')
//   }
// })

// TO DISPLAY ALL DATA
// User.find({}, (err, products) => {
//   if (err) {
//     console.log(err)
//   } else {
//     let dbLength = products.length;
//     console.log('these are this many docs: ', dbLength)
//   }
// })
