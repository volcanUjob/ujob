var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var companyPostSchema = new Schema({
  message: {
    type: String
 
  },
  posterId: {
    type: String
 
  }
});
module.exports = mongoose.model("Post", companyPostSchema);
