/* eslint-disable @next/next/no-img-element */
// Server Component
import axios from "axios";
import Header from "@/components/Header";
import ProductClient from "@/components/ProductClient";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  originalPrice?: number;
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  const productId = params.id;
  let product: Product | null = null;

  try {
    const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
    product = response.data;
  } catch (error) {
    console.error("Erro ao carregar o produto", error);
    return <div className="p-10">Produto não encontrado.</div>;
  }

  if (!product) {
    return <div className="p-10">Carregando...</div>;
  }

  return (
    <>
      <Header />
      <div className="px-3 md:px-20 pt-[115px] md:pt-[75px] flex flex-row pb-2 justify-center items-center bg-[#F2F3F8] w-full">
        <p className="pr-2 sm:text-2xl text-base font-bold">{product.title}</p>
      </div>
      <div className="p-4">
        <div className="flex flex-row justify-between items-center overflow-hidden mb-4 lg:mb-0">
          <div className="border border-blue-800 rounded-2xl flex justify-center w-2/5 ">
          <img
            src={product.image}
            alt={product.title}
            className="w-3/4"
          />
          </div>

          <div className="flex flex-col w-6/12 lg:w-3/12 lg:mr-5 z-auto">
            <ProductClient product={product} />
          </div>
        </div>
        

        <div className="flex flex-wrap w-full mt-4">
          <div className="w-1/2 mb-4">
            <p className="font-bold text-xl">SKU:</p>
            <p>{product.id}</p>
          </div>

          <div className="w-1/2 mb-4 text-right">
            <p className="font-bold text-xl">Categoria:</p>
            <p className="uppercase">{product.category}</p>
          </div>

          <div className="w-full">
            <p className="font-bold text-xl">Descrição</p>
            <span className="block bg-gray-300 p-4 rounded-2xl">{product.description}</span>
          </div>
        </div>
      </div>
    </>
  );
}
