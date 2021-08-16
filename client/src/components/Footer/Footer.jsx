import React from "react";
import Teller from "../../assets/small/teller.png";
import Amber from "../../assets/small/amber.png";
import David from "../../assets/small/david.png";
import Brady from "../../assets/small/brady.png";

const Footer = () => {
  return (
    <footer>
      <h4>What to get to know the developers? Reach out on LinkedIn!</h4>
      <div className="footerArea">
        <div className="developerStyle">
          <div className="appSpin">
            <a
              href="https://www.linkedin.com/in/tellerwetzel/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Teller} alt="Teller's Icon" />
            </a>
            <h5>Teller</h5>
          </div>
          <div className="appSpin">
            <a
              href="https://www.linkedin.com/in/amber-pratt-a57122205/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Amber} alt="Amber's Icon" />
            </a>
            <h5>Amber</h5>
          </div>
          <div className="appSpin">
            <a
              href="https://www.linkedin.com/in/mcdougaldavid/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={David} alt="David's Icon" />
            </a>
            <h5>David</h5>
          </div>
          <div className="appSpin">
            <a
              href="https://www.linkedin.com/in/brady-taylor-a93a67207/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Brady} alt="Brady's Icon" />
            </a>
            <h5>Brady</h5>
          </div>
        </div>
      </div>

      <div>
        <div>
          Icons made by{" "}
          <a href="https://www.freepik.com" title="Freepik">
            Freepik
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </div>
      </div>
      <div>&copy;2021 by Teller, Amber, David, and Brady</div>
    </footer>
  );
};

export default Footer;
