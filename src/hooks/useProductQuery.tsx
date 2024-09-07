import { fetchProductById } from "api/productService";
import { STALE_TIME } from "../constants";
import { useQuery } from "react-query";

export const useProductQuery = (id: number) => {
  return useQuery(["products", id], () => fetchProductById(id), {
    staleTime: STALE_TIME,
    refetchOnWindowFocus: false,
  });
};
