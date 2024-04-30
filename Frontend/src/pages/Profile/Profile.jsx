import React, { useState, useEffect } from "react";
import { MdGridOn } from "react-icons/md";
import { FaBloggerB } from "react-icons/fa";
import MyCard from "../../Components/Cards/MyCard";
import BCard from "../../Components/Cards/BCard";
import { MdVerified } from "react-icons/md";
import axios from "axios";
import { MdOutlineVerified } from "react-icons/md";
import { useParams } from "react-router-dom";

const styles = {
  header: {
    minHeight: "60vh",
    backgroundColor: "#5f0f40",
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
  const { id } = useParams();
  const [value, setValue] = useState("recipe");
  const [recipes, setRecipes] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [followerCount, setFollowerCount] = useState(0);
  const [followingCount, setFollowingCount] = useState(0);
  const [isFollowing, setIsFollowing] = useState(false);
  const [isRequested, setIsRequested] = useState(false);
  const [userDetail, setUserDetail] = useState(null);
const [error, setError] = useState(null);





useEffect(() => {
  const fetchUserDetail = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/auth/profile/${id}`, {
        withCredentials: true,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        }
      });

      // const userdata = response.data.userDetailById;
      setUserDetail(response.data.userDetailById);
    } catch (error) {
      setError("An error occurred while fetching user details.");
      console.error(error);
    }
  };

  fetchUserDetail();

  // No cleanup function needed

}, [id]);

// Log userDetail when it changes
useEffect(() => {
  if(userDetail)
  {
  console.log(userDetail);
  setFollowerCount(userDetail.follower.length)
  setFollowingCount(userDetail.following.length)
  setRecipes(userDetail.recipes)
  setBlogs(userDetail.blogs)
  }

 


}, [userDetail]);

// Display error if it occurs
if (error) {
  return <div>Error: {error}</div>;
}








  // Function to handle follow
  function handleFollow() {
    if (!isFollowing && !isRequested) {
      // Simulate follow request
      setIsRequested(true);
      // API call to send follow request
      // Example:
      // axios.post("http://localhost:5000/follow", { userId: "userId" })
      //   .then(response => {
      //     setIsRequested(true);
      //   })
      //   .catch(error => {
      //     console.error("Error following user:", error);
      //   });
    } else if (isFollowing) {
      // Simulate unfollow
      setIsFollowing(false);
      // API call to unfollow user
      // Example:
      // axios.post("http://localhost:5000/unfollow", { userId: "userId" })
      //   .then(response => {
      //     setIsFollowing(false);
      //   })
      //   .catch(error => {
      //     console.error("Error unfollowing user:", error);
      //   });
    }
  }

  // Function to check if user is already following
  useEffect(() => {
    // Simulating API call to check if user is already following
    // Example:
    // axios.get("http://localhost:5000/isFollowing", { params: { userId: "userId" } })
    //   .then(response => {
    //     setIsFollowing(response.data.isFollowing);
    //   })
    //   .catch(error => {
    //     console.error("Error checking if user is following:", error);
    //   });
  }, []);

  

  // Function to handle click on Recipe button
  function handleRecipeClick() {
    setValue("recipe");
  }

  // Function to handle click on Blog button
  function handleBlogClick() {
    setValue("blog");
  }

  const flexbox = {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
  };
  const totalPosts = recipes.length + blogs.length;

  // Function to format count
  function formatCount(count) {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)} M`;
    } else if (count >= 1000) {
      return `${(count / 1000).toFixed(1)} K`;
    } else {
      return count.toString();
    }
  }

  return (
    <>
      <section style={styles.body}>
        <header style={styles.header}>
          <div style={styles.details}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKmuF7Xeu5CRsXcIKgVcE0wtU8UgJQZx6pe8L4CoYJpQ&s"
              alt="user image"
              style={styles.profilePic}
            />
            <h1 style={styles.heading}>
              {userDetail ? (
                  <> {userDetail.displayName}</>
                ) : (
                  <>Loading...</>
                )}
              {followerCount >= 1000 && (
                <span style={{ color: "#4895ef" }}>
                  <MdVerified style={{ fontSize: "25px" }} />
                </span>
              )}
            </h1>
            <button className="btn btn-primary mb-3" onClick={handleFollow}>
              {isFollowing ? "Unfollow" : isRequested ? "Requested" : "Follow"}
            </button>
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
