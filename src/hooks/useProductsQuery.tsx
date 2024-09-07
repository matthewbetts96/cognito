import { fetchProducts } from "api/productService";
import { STALE_TIME } from "../constants";
import { useQuery } from "react-query";

export const useProductsQuery = () => {
  return useQuery("products", fetchProducts, {
    staleTime: STALE_TIME,
    refetchOnWindowFocus: false,
  });
};
