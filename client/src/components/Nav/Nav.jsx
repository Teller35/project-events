import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useMutation } from "@apollo/client";
import AddEventForm from "../AddEvent";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

const Nav = () => {
  const [show, setShow] = useState(false);



  function loginNav() {
    if (Auth.loggedIn()) {
      return (
        <ul>
          <li>
            <Link to="/home">Events</Link>
          </li>
          <li>
            <Link onClick={() => setShow(true)}>Add Event</Link>
          </li>
          <li>
            <Link to="">Profile</Link>
          </li>
          <li>
            <a href="/home" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul>
          <li>
            <Link to="/landingpage">SignUp</Link>
          </li>
          <li>
            <Link to="/landingpage">Login</Link>
          </li>
        </ul>
      );
    }
  }


  return (
    <>
      <header>
        <h1>
          <Link to="/">E.V.E.N.T.S.</Link>
        </h1>

        <nav>{loginNav()}</nav>
      </header>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>What kind of EVENT would you like to plan?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddEventForm handleModalClose={() => setShow(false)} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Nav;
