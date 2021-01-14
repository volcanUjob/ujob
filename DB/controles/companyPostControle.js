var mongoose = require("mongoose");
var Post = require("../models/companyPostModel");

multer = require("multer");

exports.display_all_posts = function (req, res) {
  Post.find({}, function (err, posts) {
    if (err) res.send(err);
    res.json(posts);
  });
};

exports.display_all_posts_with_userInfo = function (req, res) {
  Post.find({})
    .populate("posterId")
    .exec(function (err, posts) {
      if (err) res.send(err);
      res.json(posts);
    });
};
// exports.create_post = function (req, res) {
//   var new_post = new Post(req.body);
//   // console.log(req.body)
//   new_post.save(function (err, post) {
//     if (err) res.send(err);
//     res.json(post);
//   });
// };

// exports.display_one_post = function (req, res) {
//   console.log(req.params.postId)
//   Post.findById(req.params.postId, function (err, post) {
//     if (err) res.send(err);
//     res.json(post);
//   });
// };

// exports.update_post = function (req, res) {
//   Post.findOneAndUpdate(
//     { _id: req.params.postId },
//     req.body,
//     function (err, post) {
//       if (err) res.send(err);
//       res.json(post);
//     }
//   );
// };

exports.delete_post = function (req, res) {
  console.log(req.params.postId);
  Post.deleteOne({ _id: req.params.postId }, function (err, post) {
    if (err) res.send(err);
    res.json({ message: post });
  });
};

var post = require("../models/companyPostModel");
var Comment = require("../models/company-searcher-comment");

exports.delete_comments = function (req, res) {
  Comment.deleteMany({}, function (err, comment) {
    if (err) res.send(err);
    res.json({ comment });
  });
};

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, PATH);
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now());
  }
});

let upload = multer({
  storage: storage
});

module.exports.createPost = (req, res) => {
  console.log("post", post);
  const newPost = new post({
    posterId: req.body.posterId,
    message: req.body.message,
    imageURL: req.body.imageURL
  });
  console.log(newPost, "hello");

  newPost.save();
  res.json({ success: true });
};

exports.post_Photo = function (req, res) {};

exports.displayCommentsPost = function (req, res) {
  console.log(req.params.postId);
  Comment.find({ postId: req.params.postId })
    .populate("commenterId")
    .exec(function (err, comments) {
      if (err) res.send(err);
      res.json(comments);
    });
};
module.exports.createComment = (req, res) => {     
  const newComment = new Comment({
    commenterId: req.body.commenterId,
    comment: req.body.comment,
    postId: req.body.postId
  });
  console.log(newComment, "hello");

  newComment.save();
  res.json({ success: true });
};
