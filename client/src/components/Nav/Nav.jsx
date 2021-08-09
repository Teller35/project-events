import React, { useState } from "react";
import { Modal, Button, Nav } from "react-bootstrap";
import { useMutation } from "@apollo/client";
import AddEventForm from "../AddEvent";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);

  function loginNav() {
    if (Auth.loggedIn()) {
      return (
        <>
          <Nav.Item>
            <Nav.Link href="/home">Events</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            {/* <Nav.Link onClick={() => setShow(true)}>Add Event</Nav.Link> */}
          </Nav.Item>
          <Nav.Item>
            <Nav.Link to="">Profile</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link to="/" onClick={() => Auth.logout()}>
              Logout
            </Nav.Link>
          </Nav.Item>
        </>
      );
    } else {
      return (
        <>
          <Nav.Item>
            <Nav.Link href="/">LogIn</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/">SignUp</Nav.Link>
          </Nav.Item>
        </>
      );
    }
  }

  return (
    <>
      <header>
        <h1 className="text-center">E-V-E-N-T-S</h1>
        <Nav className="justify-content-end">{loginNav()}</Nav>
      </header>
      {/* <Modal
        show={show}
        onHide={() => setShow(false)}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Plan next Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddEventForm handleModalClose={() => setShow(false)} />
        </Modal.Body>
      </Modal> */}
    </>
  );
};

export default Navbar;
