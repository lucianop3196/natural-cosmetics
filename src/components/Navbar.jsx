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
      <Link to={"/category/cuidado personal"}>Cuidado personal</Link>
      <Link to={"/category/jabon"}>Jabón natural</Link>
      <Link to={"/category/limpieza"}>Limpieza</Link>
      <Link to={"/cart"}><CartWidget/></Link>
      <a className="signIn" href="/signIn">
        Iniciar sesión
      </a>
    </div>
  );
}

export default NavBar;
