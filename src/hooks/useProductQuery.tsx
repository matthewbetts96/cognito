import { fetchProductById } from "api/productService";
import { useQuery } from "react-query";

export const useProductQuery = (id: number) => {
  return useQuery(["products", id], () => fetchProductById(id), {
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
};
