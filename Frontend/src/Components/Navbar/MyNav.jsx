/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
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
import axios from "axios";

function MyNav(props) {
  const [showNotifications, setShowNotifications] = useState(false);
  const user = props.user;
  const [requesteduser,setRequestedUser]= useState([]);

  useEffect(() => {
    const fetchRequestedUser = async () => {
      try {
        const response = await axios.get('http://localhost:5000/auth/requesteduser', {
          withCredentials: true,
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        });
        setRequestedUser(response.data.allRequests.recivedrequest);
      console.log(response.data.allRequests.recivedrequest); // Log the response data
      } catch (error) {
        console.error(error);
      }
    };

    fetchRequestedUser();
  }, []); 




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
                        to={`/profile/${user._id}`}
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        {user.username}
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
            {/* Notifications for admin */}
            {requesteduser ? (
              <>
                {requesteduser.map((user) => (
                  <div className="d-flex justify-content-between" key={user._id}>
                    <div className="pt-2">
                      <p>{user.username}</p>
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
                ))}
              </>
            ) : (
              <p>Loading requested users...</p>
            )}
          </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default MyNav;
