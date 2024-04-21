/* eslint-disable react/prop-types */
import React from "react";

const RecipeMenu = (props) => {
  let arr=props.recipe.Ingredients;
  // console.log(arr);
  // console.log(arr.split("."))
  
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
            Width: "30%",
          }}
        >
          <h4 style={{ fontSize: "32px" }}>Ingredients</h4>
          <p>
            <span style={{ margin: "0 12px 0 0", fontWeight: "100px" }}>
              1.
            </span>
            2 1/4 cups all-purpose flour lorem230
          </p>
          <p>
            <span style={{ margin: "0 12px 0 0", fontWeight: "100px" }}>
              2.
            </span>
            1/2 cup granulated sugar
          </p>
          <p>
            <span style={{ margin: "0 12px 0 0", fontWeight: "100px" }}>
              3.
            </span>
            2 teaspoons baking powder
          </p>
          <p>
            <span style={{ margin: "0 12px 0 0", fontWeight: "100px" }}>
              4.
            </span>
            1/2 teaspoon salt
          </p>
          <p>
            <span style={{ margin: "0 12px 0 0", fontWeight: "100px" }}>
              5.
            </span>
            1/2 cup milk
          </p>
          <p>
            <span style={{ margin: "0 12px 0 0", fontWeight: "100px" }}>
              6.
            </span>
            1/4 cup unsalted butter, melted
          </p>
          <p>
            <span style={{ margin: "0 12px 0 0", fontWeight: "100px" }}>
              7.
            </span>
            1 large egg
          </p>
          <p>
            <span style={{ margin: "0 12px 0 0", fontWeight: "100px" }}>
              8.
            </span>
            1 teaspoon vanilla extract
          </p>
          <p>
            <span style={{ margin: "0 12px 0 0", fontWeight: "100px" }}>
              9.
            </span>
            Vegetable oil, for frying
          </p>
          <p>
            <span style={{ margin: "0 12px 0 0", fontWeight: "100px" }}>
              10.
            </span>
            Powdered sugar, for dusting
          </p>
        </div>
        <div style={{ width: "60%" }}>
          <h4 style={{ fontSize: "32px" }}>Procedure</h4>
          <p>
            <span style={{ margin: "0 12px 4px 0",  fontWeight:"Bold"}}>Step-1</span>In a large mixing
            bowl, whisk together the all-purpose flour, granulated sugar, baking
            powder, and salt.
          </p>
          <p>
            <span style={{ margin: "0 12px 4px 0",  fontWeight:"Bold" }}>Step-2</span>
            In a separate bowl, whisk together the milk, melted unsalted butter,
            egg, and vanilla extract.
          </p>
          <p>
            <span style={{ margin: "0 12px 4px 0",  fontWeight:"Bold" }}>Step-3</span>Gradually add the
            wet ingredients to the dry ingredients, stirring until just
            combined. Do not overmix.
          </p>
          <p>
            <span style={{ margin: "0 12px 4px 0",  fontWeight:"Bold" }}>Step-4</span>
            Cover the bowl with plastic wrap and refrigerate the dough for at
            least 30 minutes.
          </p>
          <p>
            <span style={{ margin: "0 12px 4px 0",  fontWeight:"Bold" }}>Step-5</span>
            On a floured surface, roll out the chilled dough to about 1/2-inch
            thickness.
          </p>
          <p>
            <span style={{ margin: "0 12px 4px 0",  fontWeight:"Bold" }}>Step-6</span>
            Using a donut cutter or a glass, cut out donut shapes and use a
            smaller cutter or a bottle cap to cut out the donut holes in the
            center.
          </p>
          <p>
            <span style={{ margin: "0 12px 4px 0",  fontWeight:"Bold" }}>Step-7</span>1Heat vegetable
            oil in a deep pot or a deep fryer to 350°F (175°C).
          </p>
          <p>
            <span style={{ margin: "0 12px 4px 0",  fontWeight:"Bold" }}>Step-8</span>Carefully lower
            the donuts into the hot oil, frying a few at a time, but not
            overcrowding the pot.
          </p>
          <p>
            <span style={{ margin: "0 12px 4px 0",  fontWeight:"Bold" }}>Step-9</span>
            Fry the donuts for 1-2 minutes per side or until they are golden
            brown and cooked through.
          </p>
          <p>
            <span style={{ margin: "0 12px 4px 0",  fontWeight:"Bold" }}>Step-10</span>
            Use a slotted spoon to remove the donuts from the oil and place them
            on a paper towel-lined plate to drain excess oil.
          </p>
          <p>
            <span style={{ margin: "0 12px 4px 0",  fontWeight:"Bold" }}>Step-11</span>
            While the donuts are still warm, dust them with powdered sugar.
          </p>
          <p>
            <span style={{ margin: "0 12px 4px 0",  fontWeight:"Bold" }}>Step-12</span>
            Enjoy these delicious homemade donuts with your favorite coffee or
            tea!
          </p>
        </div>
      </section>
    </>
  );
};

export default RecipeMenu;
