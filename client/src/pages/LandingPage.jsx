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
        <div>
            <h1>What will be your next ADVENTURE?</h1>
            <div>
                <button onClick={() => setShowLogin(true)}>Login</button>
                <button onClick={() => setShowSignUp(true)}>SignUp</button>
            </div>
           
            <ImageSlider slides={SliderData}/>
            <div className="loginContainer">
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