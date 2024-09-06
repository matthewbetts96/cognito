import { useBasket } from "context/BasketContext";
import styled from "styled-components";
import BasketProduct from "./components/BasketProduct";
import BasketFooter from "./components/BasketFooter";

export const Basket = () => {
  const { basket } = useBasket();

  return (
    <BasketWrapper>
      Basket
      <BasketProductsWrapper>
        {basket.map((i) => {
          return <BasketProduct product={i} />;
        })}
      </BasketProductsWrapper>
      <BasketFooter />
    </BasketWrapper>
  );
};

const BasketProductsWrapper = styled.div`
  height: 75%;
  overflow: auto;
`;

const BasketWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export default Basket;
