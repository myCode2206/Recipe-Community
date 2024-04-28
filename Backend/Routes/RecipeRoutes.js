const express = require("express");
const router = express.Router();
const MyRecipe = require("../Models/recipe");
const recipeReview = require("../Models/recipereview");

router.get("/recipe", async (req, res) => {
  try {
    const recipe = await MyRecipe.find();
    console.log("sare recipes aa jynge");
    res.status(200).json(recipe);
  } catch (e) {
    res.status(400).json({ msg: "Something Went Wrong!!!" });
  }
});

router.post("/recipe/add", async (req, res) => {
  try {
    const {
      recipeName,
      img,
      desc,
      cookingTime,
      calorie,
      ingredient,
      procedure,
    } = req.body.formData;
    console.log(req.body.formData);
    const author = "mukul";
    const usermail = "mukul";
    await MyRecipe.create({
      title: recipeName,
      image: img,
      body: desc,
      CookingTime: cookingTime,
      Calories: calorie,
      Ingredients: ingredient,
      Procedure: procedure,
      author,
      usermail,
    });
    res.status(200).json({ msg: "Added Data Successfully" });
  } catch (e) {
    res.status(400).json({ msg: "Something Went Wrong!!!" });
  }
});

router.get("/recipe/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const recipe = await MyRecipe.findById(id).populate("comment");
    res.status(200).json(recipe);
  } catch (e) {
    res.status(400).json({ msg: "Something Went Wrong!!!" });
  }
});

router.get("/recipe/:id/updaterecipe", async (req, res) => {
  try {
    const { id } = req.params;
    const recipe = await MyRecipe.findById(id);
    console.log("sare recipes aa jynge");
    res.status(200).json(recipe);
  } catch (e) {
    res.status(400).json({ msg: "somthing went wrong" });
  }
});
router.post("/recipe/:id/updaterecipe", (req, res) => {
  try {
    const { id } = req.params;
    const { title, image, CookingTime, Calories, Ingredients, Instruction } =
      req.body;
    const recipe = MyRecipe.findByIdAndUpdate(id, {
      title,
      image,
      CookingTime,
      Calories,
      Ingredients,
      Instruction,
    });
    console.log("sare recipes aa jynge");
    res.status(200).json(recipe);
  } catch (e) {
    res.status(400).json({ msg: "somthing went wrong" });
  }
});

router.post("/recipe/:id/review", async (req, res) => {
  try {
    const { id } = req.params;
    const recipee = await MyRecipe.findById(id);
    console.log(recipee);
    const { comment } = req.body;

    const newReview = await recipeReview.create({
      comment,
      user_id: "1",
      username: "mukul",
    });
    console.log(newReview);
    recipee.comment.push(newReview);
    recipee.save();

    res.status(201).json({ msg: "review added sucess" });
  } catch (e) {
    res.status(400).json({ msg: "error in adding Review" });
  }
});

module.exports = router;
