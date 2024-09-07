import styled from "styled-components";
import BasketFooter from "./components/BasketFooter/BasketFooter";
import BasketItems from "./components/BasketItems/BasketItems";
import BasketHeader from "./components/BasketHeader/BasketHeader";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

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
