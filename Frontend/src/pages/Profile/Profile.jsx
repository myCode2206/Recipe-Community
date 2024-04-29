import React, { useState, useEffect } from "react";
import { MdGridOn } from "react-icons/md";
import { FaBloggerB } from "react-icons/fa";
import MyCard from "../../Components/Cards/MyCard";
import BCard from "../../Components/Cards/BCard";
import { MdVerified } from "react-icons/md";
import axios from "axios";

const styles = {
  header: {
    minHeight: "60vh",
    // background: "linear-gradient(to right, #f9c823, #fc506e)",
    background: "linear-gradient(to right, #f9c823, rgb(53 22 27))",
    color: "white",
    clipPath: "ellipse(100vw 60vh at 50% 50%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  details: {
    textAlign: "center",
  },
  profilePic: {
    height: "6rem",
    width: "6rem",
    objectFit: "cover",
    borderRadius: "50%",
    border: "2px solid #fff",
  },
  location: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "1rem",
  },
  locationIcon: {
    marginRight: "0.5rem",
    verticalAlign: "middle",
  },
  stats: {
    display: "flex",
    justifyContent: "center",
  },
  col4: {
    width: "10rem",
    textAlign: "center",
  },
  heading: {
    fontWeight: 400,
    fontSize: "1.3rem",
    margin: "1rem 0",
  },
};

function Profile() {
  const [value, setValue] = useState("recipe");
  const [recipes, setrecipe] = useState([]);
  const [blogs, setblogs] = useState([]);
  const [followerCount, setFollowerCount] = useState(1050);
  const [followingCount, setFollowingCount] = useState(100);

  //follower and following
  function formatCount(count) {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)} M`;
    } else if (count >= 1000) {
      return `${(count / 1000).toFixed(1)} K`;
    } else {
      return count.toString();
    }
  }

  //recipees
  async function getAllRecipes() {
    try {
      const res = await axios.get("http://localhost:5000/recipe/");
      setrecipe(res.data);
    } catch (e) {
      console.log("bhai recipe fetch nhi ho pa rhi url se");
    }
  }

  useEffect(() => {
    getAllRecipes();
  }, []);

  //blogs
  async function getAllBlogs() {
    try {
      const res = await axios.get("http://localhost:5000/blog/");
      setblogs(res.data);
    } catch (e) {
      console.log("unable to fetch all blogs data");
    }
  }

  useEffect(() => {
    getAllBlogs();
  }, []);

  function handleRecipeClick() {
    setValue("recipe");
  }

  function handleBlogClick() {
    setValue("blog");
  }

  const flexbox = {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
  };
  const totalPosts = recipes.length + blogs.length;

  return (
    <>
      <section style={styles.body}>
        <header style={styles.header}>
          <div style={styles.details}>
            <img
              src="https://images.unsplash.com/photo-1516708274537-6f91e34ccaf2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1vbmtleXxlbnwwfHwwfHx8MA%3D%3D"
              alt="Rajat Gupta"
              style={styles.profilePic}
            />
            <h1 style={styles.heading}>
              Rajat Gupta
              {followerCount >= 1000 && (
                <span style={{ color: "#4895ef" }}>
                  <MdVerified />
                </span>
              )}
            </h1>
            <button className="btn btn-primary mb-3">Follow</button>
            <div style={styles.stats}>
              <div style={styles.col4}>
                <h4>{totalPosts}</h4>
                <p>Post</p>
              </div>
              <div style={styles.col4}>
                <h4>{formatCount(followerCount)}</h4>
                <p>Followers</p>
              </div>
              <div style={styles.col4}>
                <h4>{formatCount(followingCount)}</h4>
                <p>Following</p>
              </div>
            </div>
          </div>
        </header>
        <section>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              marginTop: "20px",
            }}
          >
            <div>
              <button className="btn" onClick={handleRecipeClick}>
                <MdGridOn style={{ marginRight: "2px" }} />
                Recipe
              </button>
            </div>
            <div>
              <button className="btn" onClick={handleBlogClick}>
                <FaBloggerB style={{ marginRight: "2px" }} />
                Blog
              </button>
            </div>
          </div>
          {value === "recipe" && (
            <div className="container" style={flexbox}>
              {recipes.map((recipe) => {
                return <MyCard key={recipe._id} item={recipe} />;
              })}
            </div>
          )}
          {value === "blog" && (
            <div className="container" style={flexbox}>
              {blogs.map((blog) => {
                return <BCard key={blog._id} blog={blog} />;
              })}
            </div>
          )}
        </section>
      </section>
    </>
  );
}

export default Profile;
