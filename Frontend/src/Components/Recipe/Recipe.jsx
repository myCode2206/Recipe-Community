import React from "react";
import MyNav from "../Navbar/MyNav";
import Footer from "../footer/Footer";
import MyCard from "../Cards/MyCard";
import SearchForm from "../Search Bar/SearchForm";

const Recipe = () => {
  //data fetch from api to get the content of cards

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

      <div style={flexbox}>
        <MyCard />
        <MyCard />
        <MyCard />
        <MyCard />
        <MyCard />
        <MyCard />
        <MyCard />
        <MyCard />
        <MyCard />
        <MyCard />
        <MyCard />
        <MyCard />
        <MyCard />
        <MyCard />
        <MyCard />
        <MyCard />
      </div>

      <Footer />
    </>
  );
};

export default Recipe;
