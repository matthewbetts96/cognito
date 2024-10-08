import Divider from "@mui/material/Divider";
import BasketProduct from "./components/BasketProduct/BasketProduct";
import { useBasket } from "context/BasketContext";
import styled from "styled-components";
import image from "assets/moleman.png";

const BasketItems = () => {
  const { basket } = useBasket();

  return (
    <>
      <BasketProductsWrapper>
        {!!basket.length ? (
          basket.map((i) => {
            return (
              <span key={i.id}>
                <BasketProduct product={i} />
                <Divider />
              </span>
            );
          })
        ) : (
          <NoContentContainer>
            <Image src={image} alt={"no-basket-content"} />
            Your basket seems a little empty...
          </NoContentContainer>
        )}
      </BasketProductsWrapper>
    </>
  );
};

const NoContentContainer = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  height: 60%;
  width: 60%;
`;

const BasketProductsWrapper = styled.div`
  height: 70%;
  overflow: auto;
  flex-grow: 1;
  > span {
    align-content: center;
  }
`;

export default BasketItems;
