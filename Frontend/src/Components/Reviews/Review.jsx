/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { MdOutlineStar } from "react-icons/md";
import axios from "axios"


const Review = (props) => {

  const id = props.data._id;


  const [comment ,setComment] =useState("");

  //backend call

  function  onSubmitHandler()
  {

    const postcomment = async()=>{

      if(comment.trim() == "")
      return 

      try{
        await axios.post(`http://localhost:5000/blog/${id}/comment`,{
          comment
          // username
          // user_id
        })
        setComment("");
     }
     catch(e)
     {
      console.log("unable to fetch post comments")
     }
    }
    postcomment();
    
  }



  return (
    <div
      className="container"
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        marginTop: "100px",
        marginBottom: "100px",
        borderTop: "3px solid #E5E7EB",
        paddingTop: "40px",
      }}
    >
      <div>
        <h3>Add A Review</h3>
        <MdOutlineStar style={{ fontSize: "40px", color: "#FFEE32" }} />
        <MdOutlineStar style={{ fontSize: "40px", color: "#FFEE32" }} />
        <MdOutlineStar style={{ fontSize: "40px", color: "#FFEE32" }} />
        <MdOutlineStar style={{ fontSize: "40px", color: "#FFEE32" }} />
        <MdOutlineStar style={{ fontSize: "40px", color: "#FFEE32" }} />
      </div>
      <div>
        <div>
          <label id="review">
            <h4>Add A Comment</h4>
            <textarea
             
              value={comment}
              onChange={ (e)=>{setComment(e.target.value)}} 
              name=""
              id="review"
              cols="30"
              rows="3"
              placeholder="Write a comment...."
              style={{ padding: "10px" }}
            ></textarea>
          </label>
        </div>
        <button className="btn btn-success"  onClick={onSubmitHandler} >POST</button>
      </div>
    </div>
  );
};

export default Review;
