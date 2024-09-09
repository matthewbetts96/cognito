import { BasketItem } from "context/BasketContext";
import { useProductsQuery } from "hooks/useProductsQuery";
import styled from "styled-components";
import ProductTile from "./components/ProductTile/ProductTile";
import ErrorAndLoadingHandler from "hoc/errorAndLoadingHandler/ErrorAndLoadingHandler";

export const LandingPage = () => {
  const { data: products, isLoading, error, refetch } = useProductsQuery();

  return (
    <ErrorAndLoadingHandler
      isLoading={isLoading}
      error={error}
      refetch={refetch}
    >
      <ProductsContainer>
        {/* 
          Ideally, what I'd like to have is pagination from the api, so rather than displaying in one giant list
          it is broken up into multiple pages with filtering support for name/price etc. I considered making a Next.js
          application to consume and give me this, but decided that given the requirements on the technical task, it was
          out of scope. 
        */}
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
