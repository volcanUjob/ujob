var mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  firstName: {
    type: String
    // required: true
  },
  lastName: {
    type: String
    // required: true
  },
  username: {
    type: String
    // required: true,
    // unique: true
  },
  email: {
    type: String
    // required: true,
    // unique: true
  },
  password: {
    type: String,
    required: true
  },
  job: String,
  phone: String,
  image: String,
  webSite: String,
  github: String,
  twitter: String,
  diploma: String,
  School: String,
  dateSc: String,
  language1: String,
  language2: String,
  language3: String,
  interest1: String,
  interest2: String,
  interest3: String,
  careerProfile: String,
  experienceJob1: String,
  experiencePlace1: String,
  experienceDate1: String,
  experience1: String,
  experienceJob2: String,
  experiencePlace2: String,
  experienceDate2: String,
  experience2: String,
  experienceJob3: String,
  experiencePlace3: String,
  experienceDate3: String,
  experience3: String,
  project1: String,
  aboutProject1: String,
  project2: String,
  aboutProject2: String,
  skill1: String,
  skill2: String,
  skill3: String,

  googleId: {
    type: String
  }
});

var userModel = mongoose.model("user", userSchema);
module.exports.userModel = userModel;
