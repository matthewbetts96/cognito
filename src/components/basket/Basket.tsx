import styled from "styled-components";
import BasketFooter from "./components/BasketFooter/BasketFooter";
import BasketItems from "./components/BasketItems/BasketItems";
import BasketHeader from "./components/BasketHeader/BasketHeader";

export const Basket = () => {
  return (
    <BasketWrapper>
      <BasketHeader />
      <BasketItems />
      <BasketFooter />
    </BasketWrapper>
  );
};

const BasketWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export default Basket;
