import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Recipe from "./pages/Recipe/Recipe";
import Login from "./pages/Login/Login";
import "./App.css";
import ShowRecipe from "./pages/Show Recipe/ShowRecipe";
import { MyBlogs } from "./pages/Blogs/MyBlogs";
import { ShowBlogs } from "./pages/Show Blogs/ShowBlogs";
import { Contact } from "./pages/contactUs/Contact";
import Home from "./pages/Home/Home";
import AddRecipe from "../src/Components/Form/AddRecipe";
import AddBlog from "../src/Components/Form/AddBlog";
import Profile from "./Components/Profile/Profile";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe" element={<Recipe />} />
          <Route path="/login" element={<Login />} />
          <Route path="/showRecipe/:id" element={<ShowRecipe />} />
          <Route path="/blogs" element={<MyBlogs />} />
          <Route path="/showBlogs/:id" element={<ShowBlogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/add" element={<AddRecipe />} />
          <Route path="/addblog" element={<AddBlog />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
