const mongoose = require("mongoose");
const review = require("./recipereview");
let arr = new Date().toDateString().split(" ");
let date = arr[2] + " " + arr[1];

const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  CookingTime: {
    type: String,
    required: true,
  },
  calories: {
    type: String,
    requireddd: true,
  },
  Ingredients: {
    type: [String],
    default: [],
    required: true,
  },
  Procedure: {
    type: [String],
    default: [],
    required: true,
  },
  usermail: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    default: date,
  },
  comment: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "review",
    },
  ],
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
