const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/reaction_time');

const userSchema = mongoose.Schema({
  user_name: String,
  personal_best: Date,
  all_times: Array
});

const User = mongoose.model('User', userSchema);

module.exports = { User};

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