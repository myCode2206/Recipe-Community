const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const seedDB = require("./seed");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const dotenv = require("dotenv").config();
const GoogleStrategy = require("passport-google-oauth2").Strategy;
const User = require("./Models/user");

app.use(express.json());
// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// const mongourl = process.env.MONGO_URL;
const mongourl = "mongodb://localhost:27017/recipeeee";
const port = process.env.PORT;

mongoose
  .connect(mongourl)
  .then(() => console.log("Connection Open!"))
  .catch((err) => console.log(err));

app.use(
  cors({
    origin: ["http://localhost:5173"],
  })
);
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
      maxAge: 1000 * 60 * 60 * 24 * 7 * 1,
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((user, done) => {
  done(null, user);
});

passport.serializeUser(User.serializeUser());

passport.deserializeUser(User.deserializeUser());

//passport  check krega username and password using authenticate method provided by the passport-local-mongoose package
passport.use(new LocalStrategy(User.authenticate()));

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      // callbackURL: "https://shapeshift.onrender.com/auth/google/callback",
      callbackURL: "http://localhost:5000/auth/google/callback",
      passReqToCallback: true,
    },
    function (request, accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

app.use((req, res, next) => {
  res.locals.currentUser = "";
  res.locals.currentusermail = "";
  res.locals.user = "";
  // res.locals.success=req.flash('success')
  // res.locals.error=req.flash('error');
  res.locals.currenturl = "/home";
  if (req.user && req.user.displayName) {
    res.locals.user = req.user;
    const username = req.user.displayName.split(" ")[0];
    res.locals.currentUser = username.toUpperCase();
    res.locals.currentusermail = req.user.email;
  }
  if (req.user && req.user.username) {
    res.locals.user = req.user;
    res.locals.currentUser = req.user.username.toUpperCase();
    res.locals.currentusermail = req.user.email;
  }

  next();
});

//all routes
const BlogRoutes = require("./Routes/BlogRoutes");
const NormalRoutes = require("./Routes/NormalRoutes");
const RecipeRoutes = require("./Routes/RecipeRoutes");
const UserRoutes = require("./Routes/UserRoutes");
app.use(BlogRoutes);
app.use(NormalRoutes);
app.use(RecipeRoutes);
app.use(UserRoutes);

// seedDB();

app.listen(port, () => {
  console.log("conected to port 5000");
});
