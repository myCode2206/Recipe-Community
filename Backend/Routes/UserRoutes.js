const express = require('express')
const router = express.Router();
const passport=require('passport');
const path = require("path");
const User =require('../Models/user');



// router.post("/login",(req,res)=>{
//   console.log("jello")
// })


router.post('/login', passport.authenticate('local', { 
  failureRedirect: 'http://localhost:5173/login',
}), 
(req, res) => {
  try
    {
      console.log("inside login routs  " + req.user);
      return res.status(200).json({ message: 'Logged in successfully', user:req.user });   
    }
    catch(e)
    {
      return res.status(500).json({ message: {e}});
    }
}
);


router.post('/register', async (req,res)=>{
  try {
    const { username, password, email, role } = req.body;
    const newuser = new User({ username, email,role });
    const user = await User.register( newuser, password);

    req.login(user, function(err) {
        if (err){
            return next(err);
        }
        return res.status(200).json({ message: 'sign up successfully', user:user });
    });
}
catch (e) {
    console.log(e.message);
    res.send('Signup unsucessfull');
}
})



const CLIENT_URL = "http://localhost:5173/";

router.get("/login/success", (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: "successfull",
      user: req.user,
    });
  }
});

router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "failure",
  });
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect(CLIENT_URL);
});

router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);



// router.get("/github", passport.authenticate("github", { scope: ["profile"] }));
// router.get(
//   "/github/callback",
//   passport.authenticate("github", {
//     successRedirect: CLIENT_URL,
//     failureRedirect: "/login/failed",
//   })
// );

// router.get("/facebook", passport.authenticate("facebook", { scope: ["profile"] }));

// router.get(
//   "/facebook/callback",
//   passport.authenticate("facebook", {
//     successRedirect: CLIENT_URL,
//     failureRedirect: "/login/failed",
//   })
// );

module.exports = router;