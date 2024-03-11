import React from "react";
import AboutRecipe from "../About Recipe/AboutRecipe";
import MyNav from "../Navbar/MyNav";
import RecipeMenu from "../Menu/RecipeMenu";
import Footer from "../footer/Footer";

const ShowRecipe = () => {
  return (
    <>
      <MyNav />
      <AboutRecipe />
      <RecipeMenu />
      <Footer />
    </>
  );
};

export default ShowRecipe;
