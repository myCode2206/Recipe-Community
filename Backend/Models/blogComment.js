const mongoose=require('mongoose');

const commentSchema = new mongoose.Schema({
    Comment:{
        type:String,
        require:true
    },
    usermail:{
      type:String,
      required:true
    }
  });

const BlogComment = mongoose.model("BlogComment",commentSchema);

  module.exports=BlogComment;

