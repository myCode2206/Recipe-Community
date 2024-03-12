/* eslint-disable react/prop-types */
import React from "react";
import { MdOutlineStar } from "react-icons/md";
import { TbChefHat } from "react-icons/tb";
import { FaRegClock } from "react-icons/fa";
import { LiaWeightSolid } from "react-icons/lia";

const mystyle = {
  display: "flex",
  flexWrap: "wrap",
  margin: "50px 90px",
  borderBottom: "3px solid #E5E7EB",
  justifyContent: "space-evenly",
};
const AboutRecipe = (props) => {
  return (
    <section className="" style={mystyle}>
      <div>
        <img
          src={props.recipe.image}
          alt=""
          height="300px"
          width="500px"
        />
      </div>
      <div style={{ width: "500px" }}>
        <h3 style={{ fontSize: "40px" }} className="text-dark">
          {props.recipe.title}
        </h3>
        <h5 className="text-muted">
          <TbChefHat />
          {props.recipe.author}
        </h5>
        <MdOutlineStar style={{ fontSize: "30px", color: "#FFEE32" }} />
        <MdOutlineStar style={{ fontSize: "30px", color: "#FFEE32" }} />
        <MdOutlineStar style={{ fontSize: "30px", color: "#FFEE32" }} />
        <MdOutlineStar style={{ fontSize: "30px", color: "#FFEE32" }} />
        <MdOutlineStar style={{ fontSize: "30px", color: "#FFEE32" }} />
        <p>
          {props.recipe.body}
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <FaRegClock style={{ fontSize: "30px" }} />
            <h5>Cooking Time</h5>
            <p>{props.recipe.CookingTime}</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <LiaWeightSolid style={{ fontSize: "30px" }} />
            <h5>Calories</h5>
            <p>{props.recipe.calories}cal</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutRecipe;
