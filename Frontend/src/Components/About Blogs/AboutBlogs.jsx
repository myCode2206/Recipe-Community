/* eslint-disable react/prop-types */
import React from "react";
import { FaUser } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const AboutBlogs = (props) => {
  console.log(props.data);

  const navigate=useNavigate();
  
  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "40px", marginBottom: "30px" }}>
      {props.data.title}
      </h1>
      <div className="container">
        <div style={{ textAlign: "center" }}>
          <img
            src={props.data.image}
            alt=""
            height="500px"
            width="70%"
          />
          <div className="d-flex flex-wrap justify-content-around" style={{ marginTop: "10px" }}>
            <div style={{ fontSize: "20px",  cursor:"pointer"}}  onClick={ ()=>{navigate(`/profile/${props.data.userid}`)}}>
              <FaUser style={{ color: "yellow", marginRight: "5px" }}  />
              {props.data.author}
            </div>
            <div>
              <MdOutlineDateRange style={{ marginRight: "5px" }} />
              {props.data.date}
            </div>
          </div>
        </div>
        <div className="container" style={{ marginTop: "40px", marginBottom: "40px" }}>
          <p>
          {props.data.body}
          </p>

          {/* Rest of the content */}
          
        </div>
      </div>
    </>
  );
};

export default AboutBlogs;
