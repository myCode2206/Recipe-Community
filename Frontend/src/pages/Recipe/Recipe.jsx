import { useState, useEffect } from "react";
import MyCard from "../../Components/Cards/MyCard";
import SearchForm from "../../Components/Search Bar/SearchForm";
import axios from "axios";
import { IoIosAddCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Recipe = ({ searchQuery }) => {
  const navigate = useNavigate();

  function Redirect() {
    navigate("/addrecipe");
  }

  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  async function getAllRecipes() {
    try {
      const res = await axios.get("http://localhost:5000/recipe/");
      setRecipes(res.data);
    } catch (e) {
      console.log("Unable to fetch recipes");
    }
  }

  useEffect(() => {
    getAllRecipes();
  }, []);

  //Searchfilter

  useEffect(() => {
    setFilteredRecipes(
      recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, recipes]);


  const flexbox = {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
  };

  return (
    <>
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "end",
            paddingRight: "20px",
            marginBottom: "5px",
            alignContent: "center",
          }}
        >
          <button
            style={{ right: "0" }}
            className="btn btn-primary"
            onClick={Redirect}
          >
            Add
            <IoIosAddCircleOutline
              color="#ffff"
              style={{
                marginLeft: "5px",
                fontSize: "20px",
                paddingBottom: "2px",
              }}
            />
          </button>
        </div>
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
        <SearchForm onSearch={(query) => setFilteredRecipes(
          recipes.filter((recipe) =>
            recipe.title.toLowerCase().includes(query.toLowerCase())
          )
        )} />
      </div>

      <div className="container" style={flexbox}>
        {filteredRecipes.map((recipe) => {
          return <MyCard key={recipe._id} item={recipe} />;
        })}
      </div>
    </>
  );
};

export default Recipe;
