"use client";

import ButtonAddToCart from "@/components/buttons/AddToCartButton";
import SVGCart from "@/components/icons/SVGCart";
import { useCart } from "@/context/CartContext";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  originalPrice?: number;
}

export default function ProductClient({ product }: { product: Product }) {
  const { state, dispatch } = useCart();

  const existsInCart = state.cartItems.some((item) => item.id === product.id);

  const handleAddToCart = () => {
    if (existsInCart) {
      dispatch({ type: "REMOVE_FROM_CART", payload: { id: product.id } });
    } else {
      dispatch({
        type: "ADD_TO_CART",
        payload: {
          id: product.id,
          name: product.title,
          image: product.image,
          price: product.price,
          description: product.description,
          category: product.category,
          quantity: 1,
        },
      });
    }
  };

  return (
    <div className="flex flex-col max-w-80 justify-center gap-1 rounded-3xl shadow-xl p-3 bg-white h-max discount-z">
      <p className="text-xl line-through">
        <b>DE: </b>{(product.originalPrice || product.price).toFixed(2)}
      </p>
      <p className="text-2xl"><b>DE: </b> {product.price.toFixed(2)}</p>

      <ButtonAddToCart hasItems={existsInCart} onClick={handleAddToCart} className="w-full rounded-lg z-20" Style="width: 100%">
        <SVGCart /> {existsInCart ? "REMOVER" : "COMPRAR"}
      </ButtonAddToCart>
    </div>
  );
}

