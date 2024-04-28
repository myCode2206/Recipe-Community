const mongoose=require("mongoose");
const passportLocolMongoose = require('passport-local-mongoose');

//auth model
const authentication = new mongoose.Schema({
    googleId:String,
    displayName:String,
    email:String,
    role:{
      type:String,
      default:"client"
    }
  },{timestamps:true});

  authentication.plugin(passportLocolMongoose)
  
  const User = mongoose.model("User", authentication);
  
module.exports=User 