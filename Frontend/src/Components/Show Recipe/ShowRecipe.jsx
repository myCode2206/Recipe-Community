import React from "react";
import AboutRecipe from "../About Recipe/AboutRecipe";
import MyNav from "../Navbar/MyNav";
import RecipeMenu from "../Menu/RecipeMenu";
import Footer from "../footer/Footer";
import Review from "../Reviews/Review";

const ShowRecipe = () => {
  return (
    <>
      <MyNav />
      <AboutRecipe />
      <RecipeMenu />
      <Review />
      <Footer />
    </>
  );
};

export default ShowRecipe;
