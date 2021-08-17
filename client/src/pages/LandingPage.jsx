import React, { useState } from "react";
import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/SignUp";
import ImageSlider from "../components/ImageSlider/ImageSlider";
import { Modal } from "react-bootstrap";

const LandingPage = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <div className="landingPage">
      <div className="loginArea">
        <button
          id="loginBtn"
          className="MyButton"
          onClick={() => setShowLogin(true)}
        >
          Login
        </button>
        <button
          id="SignUpButton"
          className="MyButton"
          onClick={() => setShowSignUp(true)}
        >
          SignUp
        </button>
      </div>
      <div className="landingPageInfo">
        <h1>What will be your next ADVENTURE?</h1>
        <p>
          During 2020/2021 you must have thought to yourself on at least one
          occasion, "When will I be able to start my next adventure?"
          <br />
          E-V-E-N-T-S is ready to help you find yours, or even help make your
          next adventure if you feel extra adventurous! 😉
        </p>
        <ImageSlider />
      </div>

      <div>
        <div>
          <Modal
            show={showLogin}
            onHide={() => setShowLogin(false)}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Login handleModalClose={() => setShowLogin(false)} />
            </Modal.Body>
          </Modal>
        </div>
        <div>
          <Modal
            show={showSignUp}
            onHide={() => setShowSignUp(false)}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>SignUp</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <SignUp handleModalClose={() => setShowSignUp(false)} />
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
