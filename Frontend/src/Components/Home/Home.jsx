import React from "react";
import MyNav from "../Navbar/MyNav";
import MyCarousels from "../Carousel/MyCarousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "../footer/Footer";

// import MyCard from "../Cards/MyCard";
import HCard from "../Cards/HCard";

const Home = () => {
  return (
    <>
      <Router>
        <MyNav />
        <MyCarousels />
        <HCard />
        <Footer />
      </Router>
    </>
  );
};

export default Home;
