"use client";
import { useState, useEffect, useReducer } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import ButtonAddToCart from "@/components/buttons/AddToCartButton";
import SVGCart from "@/components/icons/SVGCart";
import Pagination from "@/components/Pagination";
import { getProducts } from "@/services/getProducts";
import { cartReducer, initialState, CartItem } from "@/services/cartUtil";
import { useSearch } from "@/context/SearchContext";
import { CardList, CardItem } from "./styles";
import SVGListItems from "@/components/icons/SVGListItems";
import SVGMultipleCards from "@/components/icons/SVGMultipleCards";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
  category: string;
}

const DEFAULT_ITEMS_PER_PAGE = 4;

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [offset, setOffset] = useState(0);
  const { state, dispatch } = useCart();
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [itemsPerPage, setItemsPerPage] = useState(DEFAULT_ITEMS_PER_PAGE);

  const { search } = useSearch();

  useEffect(() => {
    const savedCartItems = JSON.parse(
      window.localStorage.getItem("cartItems") || "[]"
    );
    if (Array.isArray(savedCartItems)) {
      savedCartItems.forEach((item: CartItem) => {
        dispatch({ type: "ADD_TO_CART", payload: item });
      });
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
  }, [state.cartItems]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const productsData = await getProducts();
        setProducts(productsData);
      } catch {
        setError("Falha ao carregar produtos");
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  const handleAddToCart = (item: Product) => {
  const exists = state.cartItems.some((cartItem) => cartItem.id === item.id);

    if (exists) {
      dispatch({
        type: "REMOVE_FROM_CART",
        payload: { id: item.id },
      });
    } else {
      dispatch({
        type: "ADD_TO_CART",
        payload: {
          id: item.id,
          name: item.title,
          image: item.image,
          price: item.price,
          description: item.description,
          category: item.category,
          quantity: 1,
        },
      });
    }
  };

  const filteredProducts = products.filter((item) => {
  const searchLower = search.toLowerCase();

  return (
    item.title.toLowerCase().includes(searchLower) ||
    item.description.toLowerCase().includes(searchLower) ||
    item.category.toLowerCase().includes(searchLower) ||
    item.price.toString().toLowerCase().includes(searchLower)
  );
});

  const currentPageData = filteredProducts.slice(offset, offset + itemsPerPage);

  const handlePageChange = (page: number) => {
    const newOffset = (page - 1) * itemsPerPage;
    setOffset(newOffset);
  };
  
  if (loading) {
    return (
      <div className="min-h-screen flex justify-center mt-10">
        <div className="block rounded-full w-12 h-12 mx-auto border-4 border-t-4 border-r-4 border-transparent border-t-[#e6e6e6] border-r-[#e6e6e6] animate-spin z-10"></div>
      </div>
    );
  }

  if (error) return <div>{error}</div>;

  return (
    <>
      <Header/>
      <div className="px-3 md:px-20 pt-[115px] md:pt-[75px] flex flex-row pb-2 justify-end items-center bg-[#F2F3F8] w-full">
        <p className="pr-2 text-xs">Itens por página:</p>
        <select
        value={itemsPerPage}
        onChange={(e) => {
          setItemsPerPage(Number(e.target.value));
          setOffset(0);
        }}
        className="border text-sm rounded px-2 py-1 mr-3 bg-white"
      >
          <option value={4}>4</option>
          <option value={6}>6</option>
          <option value={8}>8</option>
        </select>
        <button
          className={`px-1 pb-1 ${viewMode === "list" ? "border-b-2 border-black" : ""}`}
          onClick={() => setViewMode("list")}>
          <SVGListItems />
        </button>
        <button
          className={`px-1 pb-1 ${viewMode === "grid" ? "border-b-2 border-black" : ""}`}
          onClick={() => setViewMode("grid")}>
          <SVGMultipleCards />
        </button>

      </div>
      <nav className="px-3 md:px-20 m-auto">
        <CardList className={viewMode}>
          {currentPageData.map((item) => (
            <CardItem key={item.id} className={viewMode}>
              {viewMode === "grid" ? (
                <>
                <Link href={`/products/${item.id}`} target="_blank">
                  <div className="grid-top">
                    <Image
                      alt="product image"
                      height={127}
                      width={90}
                      src={item.image}
                      className="max-w-30 flex"
                    />
                    <div className="items-name">
                      <p className="item-title">{item.title}</p>
                      <p className="item-category">{item.category}</p>
                    </div>
                  </div>
                  <div className="grid-bottom">
                    <p className="item-price"><span className="pr-2">R$</span>{item.price}</p>
                    <p className="item-description">{item.description}</p>
                  </div>
                </Link>
                  <ButtonAddToCart
                    hasItems={state.cartItems.some((ci) => ci.id === item.id)}
                    onClick={() => handleAddToCart(item)}
                  >
                    <SVGCart />
                  </ButtonAddToCart>
                </>
              ) : (
                <>
                  <Image
                    alt="product image"
                    height={127}
                    width={90}
                    src={item.image}
                    className="max-w-30 flex pl-1"
                  />
                  <Link href={`/products/${item.id}`} target="_blank">
                    <div className="flex flex-col items-start flex-1 min-w-0 w-full items-name">
                      <p className="item-title">{item.title}</p>
                      <p className="item-category">{item.category}</p>
                      <p className="item-price"><span className="pr-2">R$</span>{item.price}</p>
                      <p className="item-description">{item.description}</p>
                    </div>
                  </Link>
                  <ButtonAddToCart
                    hasItems={state.cartItems.some((ci) => ci.id === item.id)}
                    onClick={() => handleAddToCart(item)}
                  >
                    <SVGCart />
                  </ButtonAddToCart>
                </>
              )}
            </CardItem>
          ))}
        </CardList>
      </nav>
      <Pagination
        limit={itemsPerPage}
        total={products.length}
        offset={offset}
        onPageChange={handlePageChange}
      />
    </>
  );
}
