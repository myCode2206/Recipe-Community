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
const AboutRecipe = () => {
  return (
    <section className="" style={mystyle}>
      <div>
        <img
          src="https://images.pexels.com/photos/1191639/pexels-photo-1191639.jpeg?auto=compress&cs=tinysrgb&w=1080&dpr=1"
          alt=""
          height="300px"
          width="500px"
        />
      </div>
      <div style={{ width: "500px" }}>
        <h3 style={{ fontSize: "40px" }} className="text-dark">
          Homemade Donuts
        </h3>
        <h5 className="text-muted">
          <TbChefHat />
          Ajay Tyagi
        </h5>
        <MdOutlineStar style={{ fontSize: "30px", color: "#FFEE32" }} />
        <MdOutlineStar style={{ fontSize: "30px", color: "#FFEE32" }} />
        <MdOutlineStar style={{ fontSize: "30px", color: "#FFEE32" }} />
        <MdOutlineStar style={{ fontSize: "30px", color: "#FFEE32" }} />
        <MdOutlineStar style={{ fontSize: "30px", color: "#FFEE32" }} />
        <p>
          Donuts, also known as doughnuts, are a popular type of fried or baked
          pastry. They are typically round with a hole in the center, though
          there are various shapes and flavors available. The dough is made from
          ingredients like flour, sugar, yeast, and often eggs and milk,
          resulting in a soft and slightly sweet texture. Donuts are commonly
          enjoyed as a breakfast treat or a snack, and they have become a
          beloved staple of many cuisines around the world.lorem23
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
            <p>60 min</p>
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
            <p>450.2cal</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutRecipe;
