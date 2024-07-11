import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import MyCard from "../../Components/Cards/MyCard";
import SearchForm from "../../Components/Search Bar/SearchForm";
import Footer from "../../Components/footer/Footer";
import BCard from "../../Components/Cards/BCard";
import { IoIosAddCircleOutline } from "react-icons/io";

export const MyBlogs = ({ searchQuery }) => {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const navigate = useNavigate();

  function Redirect() {
    navigate("/addblog");
  }

  async function getAllBlogs() {
    try {
      const res = await axios.get("http://localhost:5000/blog/", {
        withCredentials: true,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      setBlogs(res.data);
    } catch (e) {
      console.log("Unable to fetch blogs");
    }
  }

  useEffect(() => {
    getAllBlogs();
  }, []);

  //search filter

  const Blogstr = (str) => str.split(' ').join('').toLowerCase();

  useEffect(() => {
    setFilteredBlogs(
      blogs.filter((blog) =>
        Blogstr(blog.title).includes(Blogstr(searchQuery))
      )
    );
  }, [searchQuery, blogs]);

  const flexbox = {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
  };

  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "end",
          paddingRight: "20px",
          marginBottom: "5px",
          alignContent: "center",
          marginTop: "30px",
        }}
      >
        <button
          style={{ right: "0" }}
          className="btn btn-primary"
          onClick={Redirect}
        >
          Add
          <IoIosAddCircleOutline
            color="#ffff"
            style={{
              marginLeft: "5px",
              fontSize: "20px",
              paddingBottom: "2px",
            }}
          />
        </button>
      </div>

      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <h1>Explore the Blogs</h1>
      </div>
      <div
        style={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          margin: "20px",
        }}
      >
        <SearchForm onSearch={(query) => setFilteredBlogs(
          blogs.filter((blog) =>
            Blogstr(blog.title).includes(Blogstr(query))
          )
        )} />
      </div>

      <div className="container" style={flexbox}>
        {filteredBlogs.map((blog) => {
          return <BCard key={blog._id} blog={blog} />;
        })}
      </div>

      <Footer />
    </>
  );
};
