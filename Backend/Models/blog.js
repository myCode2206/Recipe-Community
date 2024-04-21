const mongoose=require('mongoose');
const comment=require('./blogComment')

let arr=new Date().toDateString().split(" ");
let date=arr[2]+" "+arr[1];

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
    date:{ 
      type: String,
      default:date
    },
    usermail:{
      type:String,
      required:true
    },
    comment:[{
      type: mongoose.Schema.Types.ObjectId,
      ref:'comment'
    }]
  });

  const Blog = mongoose.model("Blog",blogschema);

  module.exports = Blog

