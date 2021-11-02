import React from "react";
import "../styles/NavBar.css";
import CartWidget from "./CartWidget";
import {Link} from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <Link to={"/"}>Natural cosmetics</Link>
      <Link to={"/"}>Productos</Link>
      <Link to={"/category/shampoo"}>Shampoo</Link>
      <Link to={"/category/desodorante"}>Desodorante</Link>
      <CartWidget/>
      <a className="signIn" href="/signIn">
        Sign In
      </a>
    </div>
  );
}

export default NavBar;
