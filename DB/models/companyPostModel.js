var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var companyPostSchema = new Schema({
  message: {
    type: String
 
  },
  imageURL: {
    type: String
  },
  posterId: {
    type: String,
    ref: 'user'
 
  }
});
module.exports = mongoose.model("Post", companyPostSchema);
