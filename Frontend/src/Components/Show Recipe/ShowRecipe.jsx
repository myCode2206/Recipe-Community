import React, { useEffect, useState } from "react";
import AboutRecipe from "../About Recipe/AboutRecipe";
import MyNav from "../Navbar/MyNav";
import RecipeMenu from "../Menu/RecipeMenu";
import Footer from "../footer/Footer";
import Review from "../Reviews/Review";
import { useParams } from "react-router-dom";
import axios from "axios";

const ShowRecipe = () => {

  const params=useParams();
  const [recipe,setRecipe] = useState([]);


  async function recipeDataFetcher(){
    const res= await axios.get(`http://localhost:5000/recipe/${params.id}`)
    // console.log(res.data);
    setRecipe(res.data);
  }

  useEffect(()=>{
    recipeDataFetcher()
  },[]);






  
  return (
    <>
      <MyNav />
      <AboutRecipe  recipe={recipe}/>
      <RecipeMenu recipe={recipe} />
      <Review  recipe={recipe}/>
      <Footer />
    </>
  );
};

export default ShowRecipe;
