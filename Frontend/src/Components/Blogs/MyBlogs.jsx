import React from "react";
import MyNav from "../Navbar/MyNav";
import SearchForm from "../Search Bar/SearchForm";
import MyCard from "../Cards/MyCard";
import Footer from "../footer/Footer";
import BCard from "../Cards/BCard";

export const MyBlogs = () => {
  const flexbox = {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
  };
  return (
    <>
      <MyNav />

      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <h1>Explore's The Blogs </h1>
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
        <BCard />
        <BCard />
        <BCard />
        <BCard />
        <BCard />
        <BCard />
        <BCard />
        <BCard />
      </div>

      <Footer />
    </>
  );
};
