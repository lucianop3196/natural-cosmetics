import React from "react";
import "../styles/Navbar.css";
function Navbar() {
  return (
    <div className="navbar">
      <span>Natural cosmetics</span>
      <a href="/home">Home</a>
      <a href="/about">About</a>
      <a href="/shop">Shop</a>
      <a href="/contact">Contact</a>
      <a className="signIn" href="/signIn">Sign In</a>
    </div>
  );
}

export default Navbar;
