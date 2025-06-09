"use client";
import React, { createContext, useReducer, useContext, useEffect } from "react";
import { cartReducer, initialState, CartItem, CartState, CartAction } from "@/services/cartUtil";

interface CartContextProps {
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
    savedCartItems.forEach((item: CartItem) => {
      dispatch({ type: "ADD_TO_CART", payload: item });
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
  }, [state.cartItems]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
};
