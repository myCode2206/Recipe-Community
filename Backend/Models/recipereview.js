const mongoose = require("mongoose");
const user =require("./user")

const recipereviewschema = new mongoose.Schema({
  rating: {
    type: Number,
  },
  comment: {
    type: String,
    require: true,
  },
  user_id: {
    type: String,
    require: true,
  },
  username: {
    type: String,
    require: true,
  },
  userid:{
    type: mongoose.Schema.Types.ObjectId,
      ref: "user",
  }
});

const recipeReview = mongoose.model("recipeReview", recipereviewschema);

module.exports = recipeReview;
