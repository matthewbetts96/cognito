import apiClient from "./api";

export const fetchProducts = async () => {
  const response = await apiClient.get("/products.json");
  return response.data;
};

/**
 * Ideally there would be a separate endpoing that'd accept an ID and just return that data
 * but this is a workaround that simulates that behaviour (TODO)
 */
export const fetchProductById = async (id: number) => {
  const response = await apiClient.get(`/products.json`);
  return response.data;
};
