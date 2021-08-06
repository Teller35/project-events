import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

const Nav = () => {
  const [show, setShow] = useState(false);

  function loginNav() {
    if (!Auth.loggedIn()) {
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
            <Link to="">SignUp</Link>
          </li>
          <li>
            <Link to="">Login</Link>
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
          <input type="text" placeholder="Event Type" />
          <input type="text" placeholder="Event Place" />
          <input type="text" placeholder="Event Time" />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setShow(false)}>Close</Button>
          <Button variant="primary">Schedule</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Nav;
