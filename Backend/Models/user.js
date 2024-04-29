const mongoose=require("mongoose");
const passportLocolMongoose = require('passport-local-mongoose');
const user= require("./user")
const blog =require("./blog");
const recipe= require("./recipe");


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
        ref:"blog"
      }
    ],
    recipes:[
      {
        type:mongoose.Schema.Types.ObjectId,
        ref:"recipe"
      }
    ],

    following:[
      {
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
      }
    ],
    follower:[
      {
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
      }
    ],
  },{timestamps:true});


  authentication.plugin(passportLocolMongoose)
  
  const User = mongoose.model("User", authentication);
  
module.exports=User 