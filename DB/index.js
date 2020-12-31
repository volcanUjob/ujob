var mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://marwenkhorchani:marwen@cluster0.scqq4.mongodb.net/ujob",

  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }

);


const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("we're connected!");
});


module.exports.db = db;

