import { BasketItem } from "context/BasketContext";
import { useProductsQuery } from "hooks/useProductsQuery";
import styled from "styled-components";

import ProductTile from "./components/ProductTile";

export const Landing = () => {
  const { data: products, isLoading, error } = useProductsQuery();

  return (
    <ProductsContainer>
      {products &&
        products.map((product: BasketItem) => {
          return <ProductTile product={product} />;
        })}
    </ProductsContainer>
  );
};

const ProductsContainer = styled.div`
  display: flex;
  height: 100%;
  overflow: auto;
  flex-flow: wrap;
  place-content: center;
`;

export default Landing;
