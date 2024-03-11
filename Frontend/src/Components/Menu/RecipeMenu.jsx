import React from "react";

const RecipeMenu = () => {
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
            width: "30%",
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
            <h5 style={{ margin: "0 12px 4px 0" }}>Step-1</h5>In a large mixing
            bowl, whisk together the all-purpose flour, granulated sugar, baking
            powder, and salt.
          </p>
          <p>
            <h5 style={{ margin: "0 12px 4px 0" }}>Step-2</h5>
            In a separate bowl, whisk together the milk, melted unsalted butter,
            egg, and vanilla extract.
          </p>
          <p>
            <h5 style={{ margin: "0 12px 4px 0" }}>Step-3</h5>Gradually add the
            wet ingredients to the dry ingredients, stirring until just
            combined. Do not overmix.
          </p>
          <p>
            <h5 style={{ margin: "0 12px 4px 0" }}>Step-4</h5>
            Cover the bowl with plastic wrap and refrigerate the dough for at
            least 30 minutes.
          </p>
          <p>
            <h5 style={{ margin: "0 12px 4px 0" }}>Step-5</h5>
            On a floured surface, roll out the chilled dough to about 1/2-inch
            thickness.
          </p>
          <p>
            <h5 style={{ margin: "0 12px 4px 0" }}>Step-6</h5>
            Using a donut cutter or a glass, cut out donut shapes and use a
            smaller cutter or a bottle cap to cut out the donut holes in the
            center.
          </p>
          <p>
            <h5 style={{ margin: "0 12px 4px 0" }}>Step-7</h5>1Heat vegetable
            oil in a deep pot or a deep fryer to 350°F (175°C).
          </p>
          <p>
            <h5 style={{ margin: "0 12px 4px 0" }}>Step-8</h5>Carefully lower
            the donuts into the hot oil, frying a few at a time, but not
            overcrowding the pot.
          </p>
          <p>
            <h5 style={{ margin: "0 12px 4px 0" }}>Step-9</h5>
            Fry the donuts for 1-2 minutes per side or until they are golden
            brown and cooked through.
          </p>
          <p>
            <h5 style={{ margin: "0 12px 4px 0" }}>Step-10</h5>
            Use a slotted spoon to remove the donuts from the oil and place them
            on a paper towel-lined plate to drain excess oil.
          </p>
          <p>
            <h5 style={{ margin: "0 12px 4px 0" }}>Step-11</h5>
            While the donuts are still warm, dust them with powdered sugar.
          </p>
          <p>
            <h5 style={{ margin: "0 12px 4px 0" }}>Step-12</h5>
            Enjoy these delicious homemade donuts with your favorite coffee or
            tea!
          </p>
        </div>
      </section>
    </>
  );
};

export default RecipeMenu;
