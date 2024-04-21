import React, { useState } from "react";
import MyNav from "../Navbar/MyNav";
import Footer from "../footer/Footer";

const AddRecipe = () => {
  const [countIng, setCount1] = useState(2);
  const [countIns, setCount2] = useState(2);

  async function Input1() {
    await setCount1(countIng + 1);
    let input = document.createElement("input");
    let steps = document.getElementsByClassName("steps")[0];
    input.type = "text";
    input.name = "recipe";
    input.className = "form-control mb-2";
    input.placeholder = `Step-${countIng}`;

    steps.append(input);
  }
  async function Input2() {
    await setCount2(countIns + 1);
    let input = document.createElement("input");
    let procedure = document.getElementsByClassName("procedure")[0];
    input.type = "text";
    input.name = "procedure";
    input.className = "form-control mb-2";
    input.placeholder = `Step-${countIns}`;

    procedure.append(input);
  }

  return (
    <>
      <MyNav />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          margin: "50px",
        }}
      >
        <form
          style={{
            border: "2px solid black",
            width: "50vw",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Recipe Name
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="recipe-name"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="img" className="form-label">
              Img
            </label>
            <input type="text" name="img" className="form-control" id="img" />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input
              type="text"
              name="desc"
              className="form-control"
              id="description"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="cookingtime" className="form-label">
              Cooking Time
            </label>
            <input
              type="text"
              name="cookingtime"
              className="form-control"
              id="cookingtime"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="calorie" className="form-label">
              Calorie
            </label>
            <input
              type="text"
              name="calorie"
              className="form-control"
              id="calorie"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Ingredient</label>
            <div className="steps">
              <input
                type="text"
                name="recipe"
                className="form-control mb-2"
                placeholder="step-1"
              />
            </div>
            <p
              className="btn text-muted addInput"
              style={{ border: "0.5px solid black" }}
              onClick={Input1}
            >
              Add
            </p>
          </div>
          <div className="mb-3">
            <label className="form-label">Procedure</label>
            <div className="procedure">
              <input
                type="text"
                name="recipe"
                className="form-control mb-2"
                placeholder="step-1"
              />
            </div>
            <p
              className="btn text-muted addInput"
              style={{ border: "0.5px solid black" }}
              onClick={Input2}
            >
              Add
            </p>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default AddRecipe;
