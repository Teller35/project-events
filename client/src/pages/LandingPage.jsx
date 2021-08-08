import React from "react";
import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/SignUp";
import ImageSlider from "../components/ImageSlider/ImageSlider";
import { SliderData } from "../components/SliderData";

const LandingPage = () => {
    return (
        <div>
            <h1>What will be your next ADVENTURE?</h1>
            <ImageSlider slides={SliderData}/>
            <div>
                <Login />
            </div>
            <div>
                <SignUp />
            </div>
        </div>
        
    )
}

export default LandingPage;