import Divider from "@mui/material/Divider";
import BasketProduct from "./components/BasketProduct/BasketProduct";
import { useBasket } from "context/BasketContext";
import styled from "styled-components";

const BasketItems = () => {
  const { basket } = useBasket();

  return (
    <>
      <BasketProductsWrapper>
        {basket.map((i) => {
          return (
            <>
              <BasketProduct product={i} />
              <Divider />
            </>
          );
        })}
      </BasketProductsWrapper>
    </>
  );
};

const BasketProductsWrapper = styled.div`
  height: 70%;
  overflow: auto;
`;

export default BasketItems;
