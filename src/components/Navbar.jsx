import React from "react";
import {Link} from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";
import styled from "styled-components";

const Span = styled.span`
margin-left : 20px;
`

const Navbar = () => {
  const {cartCount} = React.useContext(CartContext);
  const {isAuth, handleToggleAuth} = React.useContext(AuthContext);
  const handleLogout = () => {
    handleToggleAuth();
  }
  return (<div>
    <Link to="/">Home</Link>
    <Span> {isAuth ? `cartCount : ${cartCount}` : ""}</Span>
    <Span> {isAuth ? <button onClick ={handleLogout}> Logout</button> : ""}</Span>
  </div>);
};

export default Navbar;
