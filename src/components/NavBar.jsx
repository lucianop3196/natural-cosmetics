import React from "react";
import "../styles/NavBar.css";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <Link to={"/"}>Natural cosmetics</Link>
      <Link to={"/"}>Productos</Link>
      <Link to={"/category/Shampoo"}>Shampoo</Link>
      <Link to={"/category/Cuidado personal"}>Cuidado personal</Link>
      <Link to={"/category/Limpieza"}>Limpieza</Link>
      <Link to={"/cart"}>
        <CartWidget />
      </Link>
    </div>
  );
}

export default NavBar;
