import React from "react";
import MyNav from "../Navbar/MyNav";
import Footer from "../footer/Footer";
import MyCard from "../Cards/MyCard";

const Recipe = () => {
  //data fetch from api to get the content of cards

  const flexbox = {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
  };
  const serchbox = {
    border: "2px solid #606c38",
    borderRadius: "20px",
    fontSize: "34px",
  };

  return (
    <>
      <MyNav />
      <div style={{ textAlign: "center" }}>
        <input
          style={serchbox}
          type="text"
          name=""
          id=""
          placeholder="Search Recipe"
        />
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
