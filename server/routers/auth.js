var express = require("express");
const router = express.Router();
var { userModel } = require("../../DB/models/userModel");
var passport = require("passport");
const bcrypt = require("bcrypt");
const localStrategy = require("passport-local").Strategy;

router.route("/login").post(function (req, res, next) {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) res.send("No User Exists");
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.send(user);
        console.log(user);
      });
    }
  })(req, res, next);
});
 

router.route("/register").post(function (req, res) {
  userModel.findOne({ username: req.body.username }, async (err, doc) => {
    if (err) throw err;
    if (doc) res.send("User Already Exists");
    if (!doc) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      const newUser = new userModel({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        username: req.body.username,
        password: hashedPassword,
        job: "",
        image: "",
        phone: "",
        webSite: "",
        github: "",
        twitter: "",
        diploma: "",
        School: "",
        dateSc: "",
        language1: "",
        language2: "",
        language3: "",
        interest1: "",
        interest2: "",
        interest3: "",
        careerProfile: "",
        experienceJob1: "",
        experiencePlace1: "",
        experienceDate1: "",
        experience1: "",
        experienceJob2: "",
        experiencePlace2: "",
        experienceDate2: "",
        experience2: "",
        experienceJob3: "",
        experiencePlace3: "",
        experienceDate3: "",
        experience3: "",
        project1: "",
        aboutProject1: "",
        project2: "",
        aboutProject2: "",
        skill1: "",
        skill2: "",
        skill3: ""
      });
      await newUser.save();
      res.send("User Created");
    }
  });
});

router.route("/logout", (req, res) => {
  res.send("logging out");
});

router.route("/user").get(function (req, res) {
  res.send(req.user);
});

module.exports = router;
