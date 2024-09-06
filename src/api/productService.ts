import { BasketItem } from "context/BasketContext";
import apiClient from "./api";

export const fetchProducts: () => Promise<BasketItem[]> = async () => {
  const response = await apiClient.get("/products.json");
  return response.data;
};

/**
 * Ideally there would be a separate endpoing that'd accept an ID and just return that data
 * but this is a workaround that simulates that behaviour
 */
export const fetchProductById: (id: number) => Promise<BasketItem> = async (
  id: number
) => {
  const response = await apiClient.get(`/products.json`);
  return response.data.filter((i: BasketItem) => i.id === id)[0];
};
