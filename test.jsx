import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Container,
  Nav,
  Navbar,
  OverlayTrigger,
  Popover,
} from "react-bootstrap";
import { IoIosNotifications } from "react-icons/io";

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
    setShowNotifications(!showNotifications); // Toggle the state value
  };

  const closeNotifications = () => {
    setShowNotifications(false); // Close the notification panel
  };

  const notificationsPopover = (
    <Popover id="notifications-popover">
      <Popover.Header as="h3">Notifications</Popover.Header>
      <Popover.Body>
        {/* Place your notification content here */}
        <p>No new notifications</p>
      </Popover.Body>
    </Popover>
  );

  return (
    <>
      <Navbar expand="md" className="navbar">
        <Container fluid>
          <Navbar.Brand href="#" className="brand">
            Recipe
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" className="toggle" />
          <Navbar.Collapse id="offcanvasNavbar" className="collapse">
            <Nav className="me-auto">
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Link to="/blogs" className="nav-link">
                Blogs
              </Link>
              <Link to="/recipe" className="nav-link">
                Recipe
              </Link>
              <Link to="/contact" className="nav-link">
                Contact Us
              </Link>
            </Nav>
            <Nav className="ms-auto">
              {user ? (
                <>
                  <Button onClick={logouthandler} className="nav-btn">
                    Log Out
                  </Button>
                  <Button variant="outline-light" className="nav-btn">
                    <Link to="/profile" className="nav-link">
                      Profile
                    </Link>
                  </Button>
                </>
              ) : (
                <Button variant="outline-light" className="nav-btn">
                  <Link to="#" className="nav-link">
                    Log In
                  </Link>
                </Button>
              )}
              {/* Notification Panel */}
              <Offcanvas show={showNotifications} onHide={closeNotifications}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Notifications</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  {/* Place your notification content here */}
                  <p>No new notifications</p>
                </Offcanvas.Body>
              </Offcanvas>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNav;
