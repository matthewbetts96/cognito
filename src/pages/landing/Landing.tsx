import { BasketItem } from "context/BasketContext";
import { useProductsQuery } from "hooks/useProductsQuery";
import styled from "styled-components";

import ProductTile from "./components/ProductTile";
import LoadingHandler from "components/loadingHandler/LoadingHandler";
import ErrorHandler from "components/errorHandler/ErrorHandler";

export const Landing = () => {
  const { data: products, isLoading, error, refetch } = useProductsQuery();

  return (
    <LoadingHandler isLoading={isLoading}>
      <ErrorHandler error={error} refetch={refetch}>
        <ProductsContainer>
          {products &&
            products.map((product: BasketItem) => {
              return <ProductTile product={product} />;
            })}
        </ProductsContainer>
      </ErrorHandler>
    </LoadingHandler>
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
