"use client";

import { useState } from "react";
import { HeaderSection } from "./styles";
import Cart from "../Cart";
import SVGCart from "@/components/icons/SVGCart";
import { useSearch } from "@/context/SearchContext";
import Link from "next/link";

export function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { search, setSearch } = useSearch();

  return (
    <HeaderSection>
      <div className="align-header">
        <Link href={"/"}>
          <h1>Bloom Store</h1>
        </Link>

        <div className="input-order">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Pesquise aqui..."
            className="rounded-full px-4 py-1 h-8 text-gray-500 focus-visible:border-0"
          />
        </div>

          <button
            onClick={() => setSidebarOpen(true)}
            className={`p-2 rounded-md transition-colors ${
              sidebarOpen ? "bg-[#0B1A8E] text-white" : "hover:bg-gray-200"
            }`}
          >
            <SVGCart />
          </button>
      </div>

    <Cart
      isOpen={sidebarOpen}
      onClose={() => setSidebarOpen(false)}
      active={false}
    />
  </HeaderSection>
  );
}

export default Header;
