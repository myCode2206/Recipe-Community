const express = require('express')
const router = express.Router();
const passport=require('passport');
const path = require("path");
const User =require('../Models/user');


// router.post('/login',(req,res)=>{
//   console.log("inside login")
//   console.log(req.body);
// })


router.post('/login', (req, res, next) => {
  console.log(req.body);
  // Use Passport.js local strategy for authentication
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return res.status(500).json({ error: 'Internal server error' });
    }
    if (!user) {
      console.log(info);
      return res.status(400).json({ error: 'Invalid credentials' });
    }
    // If authentication succeeds, log in the user
    req.login(user, (err) => {
      if (err) {
        return res.status(500).json({ error: 'Internal server error' });
      }
      // Send a success response
      return res.status(200).json({ message: 'Logged in successfully', user });
    });
  })(req, res, next);
});




router.post('/register', async (req,res)=>{
  try {
    const { username, password, email, role } = req.body;
    const user = new User({ username, email,role });
    const newUser = await User.register( user, password);

    req.login(newUser, function(err) {
        if (err){
            return next(err);
        }
        return res.send('Signup sucessfull');
    });
}
catch (e) {
    console.log(e.message);
    res.send('Signup unsucessfull');
}
})



router.get('/auth/google',
  passport.authenticate('google', { scope:
      [ 'email', 'profile' ] }
));



router.get('/auth/google/callback',
passport.authenticate( 'google', {
      failureRedirect: '/login',
      failureFlash: true
}),(req,res)=>{
  console.log(req.user.displayName);
  res.send('google auth');

});


router.get('/logout', (req, res) => {
  req.logout(function(err) {
      if (err) { return next(err); }
      req.logOut();
      res.send("logout sucessfull")
    });
});


  

  module.exports = router;