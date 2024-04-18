import React, { useState } from "react";
import styles from "./Login.module.css";
import MyNav from "../../Components/Navbar/MyNav";
import Footer from "../../Components/footer/Footer";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    
    password: "",
    username: "",
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
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, username } = formData;
    // Add your form submission logic here
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Username:", username);
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
                <div className={styles.checkboxText}>
                  <div className={styles.checkboxContent}>
                    <input type="checkbox" id="termCon" />
                    <label htmlFor="termCon" className={styles.text}>
                      I accepted all terms and conditions
                    </label>
                  </div>
                </div>
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
