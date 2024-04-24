/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import styles from "./Login.module.css";
import MyNav from "../../Components/Navbar/MyNav";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import Footer from "../../Components/footer/Footer";

const Login = () => {
  const navigate =useNavigate()
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
    role: "", // New field for role
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleFormSwitch = () => {
    setIsLogin(!isLogin);
    // Clear form data when switching between login and signup
    setFormData({
      email: "",
      password: "",
      username: "",
      role: "", // Clear role when switching forms
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password, username, role } = formData;
    // Add your form submission logic here
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Username:", username);
    console.log("Role:", role);
    try{

      const res = await axios.post("http://localhost:5000/register",{
        email,
        password,
        username,
        role,
      })
      console.log(res.data);
      navigate("/blogs")

    }
    catch(e)
    {
      console.error("Error:", e); 
    }
    
  };

  return (
    <>
      <MyNav />
      <div className={styles.container} style={{ marginTop: "20px" }}>
        <div className={styles.forms}>
          {isLogin ? (
            <div className={styles.form}>
              <span className={styles.title}>Login</span>
              <form onSubmit={handleSubmit}>
                <div className={styles.inputField}>
                  <input
                    id="inp-email"
                    type="text"
                    placeholder="Enter your email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <i className="uil uil-envelope icon"></i>
                </div>
                <div className={styles.inputField}>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="inp-pass"
                    className={styles.password}
                    placeholder="Enter your password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                  <i className="uil uil-lock icon"></i>
                  <i
                    className={`uil ${
                      showPassword ? "uil-eye" : "uil-eye-slash"
                    } ${styles.showHidePw}`}
                    onClick={togglePasswordVisibility}
                  ></i>
                </div>
                {/* <div className={styles.inputField}>
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Role</option>
                    <option value="chef">Chef</option>
                    <option value="client">Client</option>
                  </select>
                </div> */}
                <div className={styles.checkboxText}>
                  <div className={styles.checkboxContent}>
                    <input type="checkbox" id="logCheck" />
                    <label htmlFor="logCheck" className={styles.text}>
                      Remember me
                    </label>
                  </div>
                  <a href="#" className={styles.text}>
                    Forgot password?
                  </a>
                </div>
                <div className={styles.inputField}>
                  <button type="submit">Login</button>
                </div>
              </form>
              <div className={styles.loginSignup}>
                <span className={styles.text}>
                  Not a member?{" "}
                  <a className={styles.text} onClick={handleFormSwitch}>
                    Signup Now
                  </a>
                </span>
              </div>
            </div>
          ) : (
            <div className={styles.form}>
              <span className={styles.title}>SignUp</span>
              <form onSubmit={handleSubmit}>
                <div className={styles.inputField}>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                  />
                  <i className="uil uil-user"></i>
                </div>
                <div className={styles.inputField}>
                  <input
                    type="text"
                    placeholder="Enter your email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <i className="uil uil-envelope icon"></i>
                </div>
                <div className={styles.inputField}>
                  <input
                    type="password"
                    className={styles.password}
                    placeholder="Create a password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                  <i className=" uil uil-lock icon"></i>
                </div>
                <div className={styles.inputField}>
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Role</option>
                    <option value="chef">Chef</option>
                    <option value="client">Client</option>
                  </select>
                </div>
                {/* <div className={styles.checkboxText}>
                  <div className={styles.checkboxContent}>
                    <input type="checkbox" id="termCon" />
                    <label htmlFor="termCon" className={styles.text}>
                      I accepted all terms and conditions
                    </label>
                  </div>
                </div> */}
                <div className={styles.inputField}>
                  <button type="submit">Signup</button>
                </div>
              </form>
              <div className={styles.loginSignup}>
                <span className={styles.text}>
                  Already have an account?{" "}
                  <a className={styles.text} onClick={handleFormSwitch}>
                    Log In
                  </a>
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Login;
