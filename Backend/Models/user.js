const mongoose=require("mongoose");
const passportLocolMongoose = require('passport-local-mongoose');

//auth model
const authentication = new mongoose.Schema({
    email:String,

    role:{
      default:chef
    }
  })

  authentication.plugin(passportLocolMongoose);
  
  const User = mongoose.model("User", authentication);
  
module.exports=User 