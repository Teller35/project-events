import React, { useState } from "react";
import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/SignUp";
import ImageSlider from "../components/ImageSlider/ImageSlider";
import { SliderData } from "../components/ImageSlider/SliderData";
import { Modal } from "react-bootstrap";

const LandingPage = () => {
    const [showLogin, setShowLogin] = useState(false);
    const [showSignUp, setShowSignUp] = useState(false);

    return (
        <div className="landingPage">
            <div className="landingPageInfo">
                <h1>What will be your next ADVENTURE?</h1>
                <p>During the past year and a half you must have thought to your self on at least once, "When will I be able to start my next adventure?"
                    </p>
                    <p>
                     E-V-E-N-T-S is ready to help you find yours and even make your next adventure if you feel extra adventurous! 😉</p>
                <div className="loginArea">
                    <button id="loginBtn" onClick={() => setShowLogin(true)}>Login</button>
                    <button id="SignUpButton" onClick={() => setShowSignUp(true)}>SignUp</button>
                </div>
            </div>
           
            <ImageSlider slides={SliderData}/>
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
        
    )
}

export default LandingPage;