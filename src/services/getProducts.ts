"use client";
import axios from "axios";

export async function getProducts() {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data || [];
  } catch (error) {
    console.error("Failed to fetch:", error);
    throw error;
  }
}
