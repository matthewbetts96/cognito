import styled from "styled-components";
import BasketFooter from "./components/BasketFooter/BasketFooter";
import BasketItems from "./components/BasketItems/BasketItems";
import BasketHeader from "./components/BasketHeader/BasketHeader";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

/**
 * The basket component has been designed to fit within the space of it's parent
 * so it can work as a sidebar element, as it does on desktop, as well as a full page
 * for both desktop and mobile
 *
 * The Header/Items and Footer have been split out to allow for easier testing as they
 * do not rely on eachother, only on the product context api
 */
export const Basket = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isLocationBasket = pathname === "/basket";

  return (
    <>
      {isLocationBasket && (
        <Button variant="contained" onClick={() => navigate("/")}>
          Back to products
        </Button>
      )}
      <BasketWrapper>
        <BasketHeader />
        <BasketItems />
        <BasketFooter />
      </BasketWrapper>
    </>
  );
};

const BasketWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export default Basket;
