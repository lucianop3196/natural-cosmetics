import React from "react";
import "../styles/NavBar.css";

function NavBar() {
  return (
    <div className="navbar">
      <a href="/home">Natural cosmetics</a>
      <a href="/home">Home</a>
      <a href="/about">About</a>
      <a href="/shop">Shop</a>
      <a href="/contact">Contact</a>
      <button className="cartWidget"><i className="fas fa-shopping-cart"></i></button>
      <a className="signIn" href="/signIn">
        Sign In
      </a>
    </div>
  );
}

export default NavBar;
