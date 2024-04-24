import React, { useState } from "react";
import MyNav from "../Navbar/MyNav";
import { MdGridOn } from "react-icons/md";
import { FaBloggerB } from "react-icons/fa6";

const styles = {
  header: {
    minHeight: "60vh",
    background: "linear-gradient(to right, #f9c823, #fc506e)",
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
  const [value, setValue] = useState("true");

  function handler1() {
    setValue("true");
  }

  function handler2() {
    setValue("false");
  }
  return (
    <>
      <MyNav />
      <section style={styles.body}>
        <header style={styles.header}>
          <div style={styles.details}>
            <img
              src="https://images.unsplash.com/photo-1516708274537-6f91e34ccaf2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1vbmtleXxlbnwwfHwwfHx8MA%3D%3D"
              alt="Rajat Gupta"
              style={styles.profilePic}
            />
            <h1 style={styles.heading}>Rajat Gupta</h1>
            <div style={styles.stats}>
              <div style={styles.col4}>
                <h4>20</h4>
                <p>Post</p>
              </div>
              <div style={styles.col4}>
                <h4>1.05k</h4>
                <p>Followers</p>
              </div>
              <div style={styles.col4}>
                <h4>100</h4>
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
              <button className="btn" onClick={handler1}>
                <MdGridOn style={{ marginRight: "2px" }} />
                Recipe
              </button>
            </div>
            <div>
              <button className="btn" onClick={handler2}>
                <FaBloggerB style={{ marginRight: "2px" }} />
                Blog
              </button>
            </div>
          </div>
          {value}
        </section>
      </section>
    </>
  );
}

export default Profile;
