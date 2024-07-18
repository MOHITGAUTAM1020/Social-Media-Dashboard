import React from "react";
import "../../public/assets/Header.css"
import Witch from "./Witch";
function Header() {
  return (
    <header className="header">
      <div className="wrapper">
        <div className="header-grid">
          <div>
            <h1>Social Media Dashboard</h1>
            <p className="header-total">Total Followers: 23, 004</p>
          </div>
        </div>
      </div>
      <Witch/>
    </header>
  );
}

export default Header;
