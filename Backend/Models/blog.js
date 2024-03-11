const mongoose=require('mongoose');
const comment=require('./blogComment')

const blogschema = new mongoose.Schema({
    title: {
      type:String,
      require:true
    },
    image:{
        type:String,
        require:true
    },
    author: {
      type:String,
      require:true
    },
    body: {
      type:String,
      require:true
    },
    date: { 
      type:Date, 
      default:Date.now
    },
    comment:{
      type: mongoose.Schema.Types.ObjectId,
      ref:'comment'
    }
  });

  const Blog = mongoose.model("Blog",blogschema);

  module.exports={
    Blog
  }

