import { BasketItem } from "context/BasketContext";
import { useProductsQuery } from "hooks/useProductsQuery";
import styled from "styled-components";
import ProductTile from "./components/ProductTile";
import ErrorAndLoadingHandler from "hoc/errorAndLoadingHandler/LoadingHandler";

export const LandingPage = () => {
  const { data: products, isLoading, error, refetch } = useProductsQuery();

  return (
    <ErrorAndLoadingHandler
      isLoading={isLoading}
      error={error}
      refetch={refetch}
    >
      <ProductsContainer>
        {products &&
          products.map((product: BasketItem) => {
            return <ProductTile product={product} key={product.id} />;
          })}
      </ProductsContainer>
    </ErrorAndLoadingHandler>
  );
};

const ProductsContainer = styled.div`
  display: flex;
  height: 100%;
  overflow: auto;
  flex-flow: wrap;
  place-content: center;
`;

export default LandingPage;
