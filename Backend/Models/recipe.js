const mongoose=require('mongoose');
const review=require('./recipereview')
let arr=new Date().toDateString().split(" ");
let date=arr[2]+" "+arr[1];

const recipeSchema = new mongoose.Schema({
  
    title: {
      type:String,
      require:true
    },
    image:{
      type:String,
      require:true
  },
  body:{
    type:String,
    require:true
  },
    author: {
      type:String,
      require:true
    },
    CookingTime: {
      type:String,
      require:true
    },
    calories:{
      type:String,
      required:true
    },
    Ingredients:{
      type:String,
      require:true
    },
    Procedure:{
      type:String,
      require:true
    },
    usermail:{
      type:String,
      require:true
    },
    date: { 
      type: String,
      default:date
    },
    comment:[{
      type:mongoose.Schema.Types.ObjectId,
      ref:'review'
    }]
  });


  const Recipe = mongoose.model("Recipe",recipeSchema);


  module.exports= Recipe


