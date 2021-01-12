var express = require("express");
const router = express.Router();
var postCmpControle = require("../../DB/controles/companyPostControle");

router.post("/post", postCmpControle.createPost);
router.post("/comment", postCmpControle.createComment);

router.get("/post", postCmpControle.display_all_posts);
router.get("/postUserInfo", postCmpControle.display_all_posts_with_userInfo);
router.delete("/post/:postId", postCmpControle.delete_post);
router.get("/comments/:postId", postCmpControle.displayCommentsPost);
router.delete("/comments", postCmpControle.delete_comments)
module.exports = router;
// router.post("/",function(req, res){
//   postCmpControle.createPost
// })
// module.exports = function (app) {
//   app
//     .route("/posts")
//     .post(postCmpController.create_post)
//     .get(postCmpController.display_all_posts);
//   app
//     .route("/posts/:postId")
//     .put(postCmpController.update_post)
//     .get(postCmpController.display_one_post)
//     .delete(postCmpController.delete_post);
// };
