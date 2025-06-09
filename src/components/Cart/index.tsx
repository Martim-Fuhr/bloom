/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect } from "react";
import { useCart } from "@/context/CartContext";
import { FaArrowRight } from "react-icons/fa";
import SVGDeleteItem from "@/components/icons/SVGDeleteItem";
import SVGReduceItem from "@/components/icons/SVGReduceItem";
import SVGIncrementItem from "@/components/icons/SVGIncrementItem";
import SVGCartEmpty from "@/components/icons/SVGCartEmpty";
import { CartItem } from "@/services/cartUtil";

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  active: boolean;
}

export default function Cart({ isOpen, onClose, active }: CartSidebarProps) {
  const { state, dispatch } = useCart();
  const cartItems = state.cartItems;

  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [active]);

  const calcSubtotal = (item: CartItem) => item.price * item.quantity;

  const getTotal = () =>
    cartItems.reduce((total, item) => total + calcSubtotal(item), 0);

  const incrementItem = (id: number) =>
    dispatch({ type: "INCREMENT_ITEM", payload: { id } });

  const decrementItem = (id: number) =>
    dispatch({ type: "DECREMENT_ITEM", payload: { id } });

  const removeFromCart = (id: number) =>
    dispatch({ type: "REMOVE_FROM_CART", payload: { id } });

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-40" onClick={onClose} />

      <div className="fixed right-0 top-[100px] h-dvh w-[90%] md:w-[50%] md:top-[60px] max-w-md bg-white z-50 p-1 overflow-y-auto shadow-lg">
        <div className="flex justify-between items-center mb-4 pb-2">
          <h2 className="text-blue-800 font-bold text-lg">Carrinho</h2>
          <button onClick={onClose} className="text-blue-800">
            <FaArrowRight />
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-center mt-20">
            <SVGCartEmpty />
            <p className="mt-4 text-gray-600">Seu carrinho está vazio</p>
          </div>
        ) : (
          <>
            <div className="sticky text-right bg-gray-200 text-lg border-t mt-4 right-2  w-full text-black">
              <b>Total:</b> {getTotal().toFixed(2)}
            </div>

            {cartItems.map((item) => (
              <div key={item.id} className="mb-4 shadow-md rounded-lg p-2">
                <div className="flex gap-3 items-center">
                  <div className="flex flex-col gap-2">
                    <div className="border border-blue-800 rounded-xl h-24 w-28 flex justify-center items-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-20"
                      />
                    </div>
                    <button onClick={() => removeFromCart(item.id)}>
                      <SVGDeleteItem />
                    </button>
                  </div>

                  <div className="flex-1 text-sm text-black">
                    <p className="font-bold text-sm md:text-base leading-snug line-clamp-2">
                      {item.name}
                    </p>
                    <p className="text-xs text-gray-500 line-through text-end">
                      DE: {item.originalPrice || item.price}
                    </p>
                    <p className="text-blue-800 text-lg font-bold text-end">
                      POR: {item.price.toFixed(2)}
                    </p>
                    <p className="mt-1 font-bold text-lg text-end uppercase">
                      QTDE:{" "}
                      <span className="rounded-3xl bg-slate-200 px-3">
                        {item.quantity}
                      </span>
                    </p>
                    <div className="flex items-end gap-2 mt-1 justify-end">
                      <button onClick={() => decrementItem(item.id)}>
                        <SVGReduceItem />
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => incrementItem(item.id)}>
                        <SVGIncrementItem />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="text-right mt-2 font-bold text-black">
                  Total: {calcSubtotal(item).toFixed(2)}
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
}
