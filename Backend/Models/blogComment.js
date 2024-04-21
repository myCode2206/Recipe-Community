const mongoose=require('mongoose');

const commentSchema = new mongoose.Schema({
  comment:{
        type:String,
        require:true
    },
    user_id:{
      type:String,
      required:true
    },
    username:{
      type:String,
      required:true
    }
  });

const BlogComment = mongoose.model("BlogComment",commentSchema);

  module.exports=BlogComment;

