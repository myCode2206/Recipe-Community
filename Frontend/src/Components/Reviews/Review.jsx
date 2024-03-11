import React from "react";
import { MdOutlineStar } from "react-icons/md";
const Review = () => {
  return (
    <div
      className="container"
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        marginTop: "100px",
        marginBottom: "100px",
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
              name=""
              id="review"
              cols="30"
              rows="3"
              placeholder="Write a comment...."
              style={{ padding: "10px" }}
            ></textarea>
          </label>
        </div>
        <button class="btn btn-success ">POST</button>
      </div>
    </div>
  );
};

export default Review;
