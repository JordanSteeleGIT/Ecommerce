import React from "react";
import Uppernav from "./Uppernav";
import Middlenav from "./Middlenav";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <Uppernav />
      <Middlenav />
    </div>
  );
};

export default Navbar;
