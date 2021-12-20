import React from "react";
import { Link } from "react-router-dom";

const Uppernav = () => {
  return (
    <div className="upper-nav-container">
      <div className="upper-nav-wrapper">
        <div className="upper-nav-left">
          <Link to="/">
            <h1>Home</h1>
          </Link>
        </div>

        <div className="upper-nav-right">
          <div className="upper-nav-item">
            <h1>
              Phone: <span>01234 567890</span>
            </h1>
          </div>
          <div className="upper-nav-item">
            <h1>
              Email: <span>info@domain.co.uk</span>
            </h1>
          </div>
          <div className="upper-nav-item">
            <h1>ENG</h1>
            <img src="../images/flag.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Uppernav;
