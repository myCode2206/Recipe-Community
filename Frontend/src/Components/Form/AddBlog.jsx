import React, { useState, useRef } from "react";
import MyNav from "../Navbar/MyNav";
import Footer from "../footer/Footer";

const AddRecipe = () => {
    const [countIng, setCount1] = useState(2);
    const [countIns, setCount2] = useState(2);
    const [formData, setFormData] = useState({
        blogName: "",
        img: "",
        desc: "",

    });
    const formref = useRef();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        formref.current.reset();
        console.log(formData);

    }

    async function Input1() {
        await setCount1(countIng + 1);
        let input = document.createElement("input");
        let steps = document.getElementsByClassName("steps")[0];
        input.type = "text";
        input.name = "ingredient";
        input.className = "form-control mb-2";
        input.placeholder = `Step-${countIng}`;
        input.onChange = handleChange;
        steps.append(input);
    }
    async function Input2() {
        await setCount2(countIns + 1);
        let input = document.createElement("input");
        let procedure = document.getElementsByClassName("procedure")[0];
        input.type = "text";
        input.name = "procedure";
        input.onChange = handleChange;
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
                    onSubmit={onSubmitHandler}
                    ref={formref}
                >
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">
                            Blog Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="title"
                            name="blogName"
                            aria-describedby="emailHelp"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="img" className="form-label">
                            Img
                        </label>
                        <input type="text" name="img" className="form-control" id="img" onChange={handleChange} />
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
                            onChange={handleChange}
                        />
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
