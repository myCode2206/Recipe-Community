const mongoose=require("mongoose");
const passportLocolMongoose = require('passport-local-mongoose');

//auth model
const authentication = new mongoose.Schema({
    username:String,

    role:{
      type:String,
      default:"chef"
    }
  })

  authentication.plugin(passportLocolMongoose);
  
  const User = mongoose.model("User", authentication);
  
module.exports=User 