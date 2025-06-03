import React from "react";

function Header(){
  return (
    <header>
      <div className="container">
        <h1>Explore Canada</h1>
        <nav>
          <ul>
            <li><a href="#destinations">Destinations</a></li>
            <li><a href="#tips">Tips</a></li>
            <li><a href="#footer">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;