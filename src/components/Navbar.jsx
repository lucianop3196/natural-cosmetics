import React from "react";
import "../styles/NavBar.css";
import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <div className="navbar">
      <a href="/home">Natural cosmetics</a>
      <a href="/home">Home</a>
      <a href="/about">About</a>
      <a href="/shop">Shop</a>
      <a href="/contact">Contact</a>
      <CartWidget/>
      <a className="signIn" href="/signIn">
        Sign In
      </a>
    </div>
  );
}

export default NavBar;
