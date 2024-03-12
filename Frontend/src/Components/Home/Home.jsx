import React from "react";
import MyNav from "../Navbar/MyNav";
import MyCarousels from "../Carousel/MyCarousel";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../footer/Footer";
import HCard from "../Cards/HCard";
import Herotitle from "../Hero Text/Herotitle";

const Home = () => {
  return (
    <>
      <MyNav />
      <Herotitle />
      <MyCarousels />
      {/* <HCard /> */}
      <Footer />
    </>
  );
};

export default Home;
