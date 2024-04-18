import React from "react";
import MyNav from "../../Components/Navbar/MyNav";
import Footer from "../../Components/footer/Footer";
import AboutBlogs from "../../Components/About Blogs/AboutBlogs";
import Review from "../../Components/Reviews/Review";

export const ShowBlogs = () => {
  return (
    <div>
      <MyNav />
      <AboutBlogs />
      <Review />
      <Footer />
    </div>
  );
};
