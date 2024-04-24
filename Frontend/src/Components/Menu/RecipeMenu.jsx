/* eslint-disable react/prop-types */
import React from "react";

const RecipeMenu = (props) => {
  let arr = props.recipe.Ingredients;
  let arr2 = props.recipe.Procedure;

  return (
    <>
      <h1 style={{ textAlign: "center", fontSize: "60px" }}>
        This Is My Recipe
      </h1>
      <section
        style={{ marginTop: "40px", marginBottom: "40px" }}
        className="container d-flex flex-wrap justify-content-around"
      >
        <div
          style={{
            borderRight: "3px solid #E5E7EB",
            paddingRight: "20px",
            width: "30%", // 'W' in width should be lowercase
          }}
        >
          <h4 style={{ fontSize: "32px" }}>Ingredients</h4>
          {arr &&
            arr.map((ingredient, idx) => (
              <p key={idx}>
                <span style={{ margin: "0 12px 0 0", fontWeight: "bold" }}>
                  {idx + 1}.
                </span>
                {ingredient}
              </p>
            ))}
        </div>
        <div style={{ width: "60%" }}>
          <h4 style={{ fontSize: "32px" }}>Procedure</h4>

          {arr2 &&
            arr2.map((procedure, idx) => (
              <p key={idx}>
                <span style={{ margin: "0 12px 0 0", fontWeight: "bold" }}>
                  Step-{idx + 1}
                </span>
                {procedure}
              </p>
            ))}
        </div>
      </section>
    </>
  );
};

export default RecipeMenu;
