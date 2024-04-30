const mongoose=require("mongoose");
const passportLocolMongoose = require('passport-local-mongoose');
const Blog =require("./blog");
const Recipe= require("./recipe");


//auth model
const authentication = new mongoose.Schema({
    googleId:String,
    displayName:String,
    email:String,
    role:{
      type:String,
      default:"client"
    },
    blogs:[
      {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Blog"
      }
    ],
    recipes:[
      {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Recipe"
      }
    ],

    following:[
      {
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
      }
    ],
    follower:[
      {
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
      }
    ],
    waitingfollower:[
      {
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
      }
    ],
  },{timestamps:true});


  authentication.plugin(passportLocolMongoose)
  
  const User = mongoose.model("User", authentication);
  
module.exports=User 