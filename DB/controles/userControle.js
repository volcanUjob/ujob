var mongoose = require("mongoose");


var { userModel } = require("../models/userModel.js");

// var selectOneUser = function (user, callback) {
//   console.log("Yooo");
//   User.findOne({ id: user.username }, function (err, result) {
//     if (err) {
//       console.log("error while searching user");
//       callback(err, null);
//     } else {
//       // if (result) {
//       // }
//       console.log("db: User found:");
//       console.log(result);
//       callback(null, result);
//     }
//   });
// };