import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Recipe from "./Components/Recipe/Recipe";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import "./App.css";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/recipe" element={<Recipe />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
