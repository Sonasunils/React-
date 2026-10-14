import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

import "./Navsection.css";

const Navsection = () => {
  return (
    <Navbar expand="lg" className="ss navbar-custom">
      <Container>

        {/* Netflix Logo */}
        <Navbar.Brand href="#">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netflix Logo"
            className="netflix-logo"
          />
        </Navbar.Brand>

        {/* Mobile Toggle */}
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="bg-light"
        />

        <Navbar.Collapse id="basic-navbar-nav ">

          {/* Navigation Links */}
          <Nav className="ss me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#trending">Trending</Nav.Link>
            <Nav.Link href="#genres">Genres</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#download">Download</Nav.Link>
          </Nav>

          {/* Buttons */}
          <div className="nav-buttons">
            <Button variant="outline-light" className="login-btn">
              Sign In
            </Button>

            <Button variant="danger" className="signup-btn">
              Sign Up
            </Button>
          </div>

        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
};

export default Navsection;