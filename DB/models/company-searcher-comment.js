var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var company_searcher_CommentSchema = new Schema({
  comment: {
    type: String
  },

  commenterId: {
    type: String,
    ref: "user"
  },
  postId:{
    type:String
  }
});
module.exports = mongoose.model("Comment", company_searcher_CommentSchema);
