var express = require("express");
var router = express.Router();
var { userModel } = require("../../DB/models/userModel.js");
const multer = require("multer");





const DIR = "./ujob/src/assets/";
var name_file;
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname.toLowerCase().split(" ").join("-");
    name_file = fileName;
    cb(null, fileName);
  }
});

// Multer Mime Type Validation
var upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
    }
  }
});



router.route("/api/user/:id").get(function (req, res, next) {
  userModel.findById(req.params.id, (err, userfound) => {
    if (err) {
      console.log(err);
    } else {
      return res.status(200).json(userfound);
    }
  });
});


router.route("/api/edit/:id").put(upload.single("file"),function (req, res) {
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
