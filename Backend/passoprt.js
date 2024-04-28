const GoogleStrategy = require("passport-google-oauth20").Strategy;
// const GithubStrategy = require("passport-github2").Strategy;
// const FacebookStrategy = require("passport-facebook").Strategy;
const LocalStrategy = require('passport-local');
const User =require("./Models/user")
const passport = require("passport");





//passport  check krega username and password using authenticate method provided by the passport-local-mongoose package
// passport.use(new LocalStrategy(User.authenticate())); 


// passport.serializeUser(User.serializeUser());

// passport.deserializeUser(User.deserializeUser());


passport.use(
  new GoogleStrategy(
    {
      clientID: "782816024720-to1fe8comhncfkcnjeah3v3fm33qpkap.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

// passport.use(
//   new GithubStrategy(
//     {
//       clientID: GITHUB_CLIENT_ID,
//       clientSecret: GITHUB_CLIENT_SECRET,
//       callbackURL: "/auth/github/callback",
//     },
//     function (accessToken, refreshToken, profile, done) {
//       done(null, profile);
//     }
//   )
// );

// passport.use(
//   new FacebookStrategy(
//     {
//       clientID: FACEBOOK_APP_ID,
//       clientSecret: FACEBOOK_APP_SECRET,
//       callbackURL: "/auth/facebook/callback",
//     },
//     function (accessToken, refreshToken, profile, done) {
//       done(null, profile);
//     }
//   )
// );

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
