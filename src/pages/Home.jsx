import React from "react";
import { CartContext } from "../context/CartContext";

const Home = () => {
  const {cartCount} = React.useContext(CartContext);
  return <div>
    {cartCount}

  </div>;
};

export  {Home};
