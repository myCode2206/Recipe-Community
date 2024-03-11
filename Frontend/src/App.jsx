import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Recipe from "./Components/Recipe/Recipe";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import "./App.css";
import ShowRecipe from "./Components/Show Recipe/ShowRecipe";
import { MyBlogs } from "./Components/Blogs/MyBlogs";
import { ShowBlogs } from "./Components/Show Blogs/ShowBlogs";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe" element={<Recipe />} />
          <Route path="/login" element={<Login />} />
          <Route path="/showRecipe" element={<ShowRecipe />} />
          <Route path="/blogs" element={<MyBlogs/>} />
          <Route path="/showBlogs" element={<ShowBlogs />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
