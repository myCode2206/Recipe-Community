import  { useState, useEffect } from "react";
import MyNav from "../../Components/Navbar/MyNav";
import Footer from "../../Components/footer/Footer";
import MyCard from "../../Components/Cards/MyCard";
import SearchForm from "../../Components/Search Bar/SearchForm";
import axios from "axios";

const Recipe = () => {
  //data fetch from api to get the content of cards

  const [recipes, setrecipe] = useState([]);

  async function getAllRecipes() {
    try {
      const res = await axios.get("http://localhost:5000/recipe/");
      setrecipe(res.data);
    } catch (e) {
      console.log("bhai recipe fetch nhi ho pa rhi url se");
    }
  }

  useEffect(() => {
    getAllRecipes();
  }, []);

  const flexbox = {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
  };

  return (
    <>
      <MyNav />

      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <h1>Discover Flavorful Creations</h1>
      </div>
      <div
        style={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          margin: "20px",
        }}
      >
        <SearchForm />
      </div>

      <div className="container" style={flexbox}>
        {recipes.map((recipe) => {
          return <MyCard key={recipe._id} item={recipe} />;
        })}
        
      </div>

      <Footer />
    </>
  );
};

export default Recipe;
