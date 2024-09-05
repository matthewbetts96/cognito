import { fetchProducts } from "api/productService";
import { useQuery } from "react-query";

export const useProductsQuery = () => {
  return useQuery("products", fetchProducts, {
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
};
