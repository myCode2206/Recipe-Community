import React from "react";
import MyNav from "../Navbar/MyNav";
import Footer from "../footer/Footer";
import AboutBlogs from "../About Blogs/AboutBlogs";
import Review from "../Reviews/Review";

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
