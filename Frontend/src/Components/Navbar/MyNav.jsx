/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";
import { IoIosNotifications } from "react-icons/io";
import { IoCheckmarkSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

function MyNav(props) {
  const [showNotifications, setShowNotifications] = useState(false);
  const user = props.user;

  const logouthandler = () => {
    try {
      window.open("http://localhost:5000/auth/logout", "_self");
    } catch (e) {
      console.log("logout button kam nhi kiya");
      console.log(e);
    }
  };

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  const closeNotifications = () => {
    setShowNotifications(false);
  };

  return (
    <>
      {["md"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          style={{ backgroundColor: "#e36414" }}
        >
          <Container fluid>
            <Navbar.Brand href="#">Recipe</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Recipe
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 pe-3 align-content-center">
                  <Link
                    to="/"
                    style={{
                      textDecoration: "none",
                      margin: "5px",
                      color: "black",
                    }}
                  >
                    Home
                  </Link>
                  <Link
                    to="/blogs"
                    style={{
                      textDecoration: "none",
                      margin: "5px",
                      color: "black",
                    }}
                  >
                    Blogs
                  </Link>
                  <Link
                    to="/recipe"
                    style={{
                      textDecoration: "none",
                      margin: "5px",
                      color: "black",
                    }}
                  >
                    Recipe
                  </Link>
                  <Link
                    to="/contact"
                    style={{
                      textDecoration: "none",
                      margin: "5px",
                      color: "black",
                    }}
                  >
                    Contact Us
                  </Link>
                </Nav>
                {user ? (
                  <>
                    <Button
                      onClick={logouthandler}
                      style={{
                        backgroundColor: "#e36414",
                        color: "black",
                        marginRight: "5px",
                        border: "none",
                        outline: "none",
                      }}
                    >
                      Log Out
                    </Button>
                    <Button
                      style={{
                        backgroundColor: "#e36414",
                        color: "black",
                        marginRight: "5px",
                        border: "none",
                        outline: "none",
                      }}
                    >
                      <Link
                        to="/profile"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        Profile
                      </Link>
                    </Button>
                  </>
                ) : (
                  <Button
                    style={{
                      backgroundColor: "#e36414",
                      color: "black",
                      marginRight: "5px",
                      border: "none",
                      outline: "none",
                    }}
                  >
                    <Link
                      to="/login"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      Log In
                    </Link>
                  </Button>
                )}
                <Button
                  onClick={toggleNotifications}
                  style={{
                    backgroundColor: "#e36414",
                    color: "black",
                    border: "none",
                    outline: "none",
                  }}
                >
                  <IoIosNotifications style={{ fontSize: "23px" }} />
                </Button>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      {/* Notification Panel */}
      <Offcanvas show={showNotifications} onHide={closeNotifications}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Notifications (2) </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="d-flex justify-content-between">
            <div className="pt-2">
              <p>Ayush Agarwal</p>
            </div>
            <div>
              <button className="btn btn-success">
                <IoCheckmarkSharp />
              </button>
              <button className="btn btn-danger ms-2">
                <RxCross2 />
              </button>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <div className="pt-2">
              <p>Monu Bhaiya</p>
            </div>
            <div>
              <button className="btn btn-success">
                <IoCheckmarkSharp />
              </button>
              <button className="btn btn-danger ms-2">
                <RxCross2 />
              </button>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default MyNav;
