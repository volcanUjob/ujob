var express = require("express");
var router = express.Router();
var { userModel } = require("../../DB/models/userModel.js");

router.route("/api/user/:id").get(function (req, res, next) {
  userModel.findById(req.params.id, (err, userfound) => {
    if (err) {
      console.log(err);
    } else {
      return res.status(200).json(userfound);
    }
  });
});


router.route("/api/edit/:id").put(function (req, res) {
  return userModel.findByIdAndUpdate(req.params.id, req.body,function(err,data){
     if(err){
       console.log(err)
     }else{ 
       console.log(data)
     }
  })
      
    
  
});

// userModel: async (req, res, next) => {
//   try {
//     const id = req.params.id;
//     const updates = req.body;
//     const options = { new: true };

//     const result = await userModel.findByIdAndUpdate(id, updates, options);
//     if (!result) {
//       throw createError(404, 'Product does not exist');
//     }
//     res.send(result);
//   } catch (error) {
//     console.log(error.message);
//     if (error instanceof mongoose.CastError) {
//       return next(createError(400, 'Invalid Product Id'));
//     }

//     next(error);
//   }
// }



module.exports = router;
