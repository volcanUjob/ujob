const express = require("express");

var bodyParser = require("body-parser");
const session = require("express-session");
const cookieParser = require("cookie-parser");
var passporLocal = require("passport-local");
const cors = require("cors");
const db = require("../DB/index");
var profile = require("./routers/profile.js");
const app = express();
const port = 3000;
var passport = require("passport");
var auth = require("./routers/auth.js");
var user = require("./routers/user");
var post = require("./routers/postCmp.js");
const cookieSession = require("cookie-session");
var profile = require("./routers/profile");
var GoogleStrategy = require("passport-google-oauth20").Strategy;
const { userModel } = require("../DB/models/userModel");

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: ["azertyuiopqsdfghjkl"]
  })
);

app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true
  })
);
app.use(
  cors({
    origin: "http://localhost:4200", // <-- location of the angular app were connecting to
    credentials: true
  })
);

app.use(cookieParser("secretcode"));
// Passport middleware
app.use(passport.initialize());
app.use(passport.session());
require("./routers/passportConfig")(passport);

app.use("/auth", auth);
app.use("/profile", profile);

////////////

passport.serializeUser((user, done) => {
  done(null, user.id);
});
passport.deserializeUser((id, done) => {
  userModel.findById({ _id: id }, (err, user) => {
    done(err, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID:
        "1045411814561-j7e9giknpj6b8a458kojr1foc2dnpame.apps.googleusercontent.com",
      clientSecret: "vkgpSPqtFAewhsFc2xlz7trB",
      callbackURL: "/auth/google/callback"
    },

    function (accessToken, refreshToken, profile, done) {
      console.log(profile);
      passport.use(
        new GoogleStrategy(
          {
            clientID:
              "1045411814561-j7e9giknpj6b8a458kojr1foc2dnpame.apps.googleusercontent.com",
            clientSecret: "vkgpSPqtFAewhsFc2xlz7trB",
            callbackURL: "/auth/google/callback"
          },

          function (accessToken, refreshToken, profile, done) {
            console.log(profile);

            userModel.findOne({ googleId: profile.id }).then((currentUser) => {
              if (currentUser) {
                console.log("user is: ", currentUser);
                done(null, currentUser);
              } else {
                new userModel({
                  username: profile.displayName,
                  googleId: profile.id,
                  firstName: profile.name.familyName,
                  lastName: profile.name.givenName,
                  job: "",
                  email: "",
                  password: "",
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
                })
                  .save()
                  .then((newUser) => {
                    console.log("new user created: " + newUser);
                  });
              }
            });
          }
        )
      );
    }
  )
);
app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  function (req, res) {
    res.redirect(301, "http://localhost:4200/prof-user");
  }
);

app.use("/", user);
app.use("/", post);

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
