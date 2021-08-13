import React from "react";

const Donate = () => {

    return (
        <div className="donateMargin">
            <section className="donateSection"> 
                <div className="donateContainer">
                    <div className="donateText">
                        <h1>Support EVENTS!</h1>
                        <p>As EVENTS continues to grow and expand to offer more events to people all over the world we greatly appreciate the support that is offered by our users! Your donation will allow us to make new opportunities for others!</p>
                        <p>In addition a portion of your donation will also be donated </p>
                    </div>
                    <div className="donateForm">
                        <script src="https://donorbox.org/widget.js" paypalExpress="false"></script><iframe src="https://donorbox.org/embed/e-v-e-n-t-s" name="donorbox" allowpaymentrequest="" seamless="seamless" frameborder="0" scrolling="no" id="donateBox"></iframe>
                    </div>
                </div>
                <div className="donorWallContainer">
                    <script src="https://donorbox.org/widget.js" paypalExpress="false"></script><iframe frameborder="0" name="donorbox" scrolling="no" seamless="seamless" src="https://donorbox.org/embed/e-v-e-n-t-s?only_donor_wall=true" id="donarWall"></iframe>
                </div>
            </section>
        </div>
    )
};

export default Donate;
