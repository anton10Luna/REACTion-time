const mongoose = require('mongoose');
const fakeData = require('./fakeData.js')

mongoose.connect('mongodb://localhost/reaction_time');


const userSchema = mongoose.Schema({
  userName: String,
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
// let Pablo = new User({
//   userName: "Pablo"
// });

// Pablo.save((err) => {
//   if(err) {
//     console.log('err saving in db', err);
//   } else {
//     console.log('user saved')
//   }
// });


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

// const db = mongoose.connection;

// db.on('error', function () {
//   console.log('mongoose connection error');
// });

// db.once('open', function () {
//   console.log('mongoose connected successfully');
// });



// const Item = mongoose.model('Item', itemSchema);

// const selectAll = function (callback) {
//   Item.find({}, function (err, items) {
//     if (err) {
//       callback(err, null);
//     } else {
//       callback(null, items);
//     }
//   });
// };

// module.exports.selectAll = selectAll;