/* eslint-disable react/prop-types */
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useEffect } from "react";
import axios from "axios";

function MyNav(props) {
  const user = props.user;

 
    
    const logouthandler = ()=>{
      try{


        window.open("http://localhost:5000/auth/logout", "_self");

      }
      catch(e)
      {
        console.log("logout button kam nhi kiya");
        console.log(e);
      }
      

    }

  
  return (
    <>

      {["md"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          style={{ backgroundColor: "#ffee32" }}
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
                <Nav
                  className="justify-content-center flex-grow-1 pe-3 align-content-center"
                  style={{}}
                >
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
                {
                user?(
                <>
                <button
                      style={{
                        backgroundColor: "#ffd449",
                        color: "black",
                        marginRight: "5px",
                      }}
                      className="d-flex btn btn-success"
                    >
                      <Link
                        onClick={logouthandler}
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        Log Out
                      </Link>
                    </button><Button
                      style={{ backgroundColor: "#ffd449", color: "black" }}
                      className="d-flex btn btn-success"
                    >
                        <Link
                          to="/profile"
                          style={{
                            textDecoration: "none",
                            color: "black",
                          }}
                        >
                          Profile
                        </Link>
                      </Button>
                      </>
                ):
                (
                  <button
                  style={{
                    backgroundColor: "#ffd449",
                    color: "black",
                    marginRight: "5px",
                  }}
                  className="d-flex btn btn-success"
                >
                  <Link
                    to="/login"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Log In
                  </Link>
                </button>
                )
                }
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default MyNav;
