const mongoose=require('mongoose');

const recipereviewschema = new mongoose.Schema({
    
    rating:{
        type:Number,
        require:true
    },
    comment:{
        type:String,
        require:true
    },
    usermail:{
      type:String,
      require:true
    }
    
  });

  const recipeReview = mongoose.model("recipeReview",recipereviewschema);


  module.exports = recipeReview

