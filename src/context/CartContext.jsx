import React, { createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartCount, setCartCount] = React.useState(0);

    const handleCartCount = (val) => {
      setCartCount((prev) => prev + val);
    }


  return <CartContext.Provider value={{cartCount, handleCartCount}}>{children}</CartContext.Provider>;
};
