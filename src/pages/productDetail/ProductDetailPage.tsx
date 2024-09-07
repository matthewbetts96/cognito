import { Button, InputLabel, TextField, Typography } from "@mui/material";
import { useProductQuery } from "hooks/useProductQuery";

import image from "assets/duffBeer.png";
import styled from "styled-components";
import ErrorAndLoadingHandler from "hoc/errorAndLoadingHandler/LoadingHandler";
import { useLocation, useNavigate } from "react-router-dom";
import { BasketItem, useBasket } from "context/BasketContext";
import { useState } from "react";

/**
 * A page to show the details of each individual product and it's
 * description, with the ability to add that product to the basket
 */

export const ProductDetailPage = () => {
  const { modifyBasket } = useBasket();
  const [quantity, setQuantity] = useState<number>(1);
  const { pathname } = useLocation();
  const {
    data: product,
    isLoading,
    error,
    refetch,
  } = useProductQuery(Number(pathname.match(/[0-9]/i) || 0));
  const navigate = useNavigate();

  return (
    <Container>
      <Button variant="contained" onClick={() => navigate("/")}>
        Back to products
      </Button>
      <ErrorAndLoadingHandler
        isLoading={isLoading}
        error={error}
        refetch={refetch}
      >
        <Typography variant="h3">{product?.name}</Typography>
        <div>
          <Image alt={"duffBeer"} src={image}></Image>
        </div>
        <div>
          <div>{product && product.description}</div>
          <div>
            <InputLabel htmlFor="standard-adornment-amount">
              £{product && product.price}
            </InputLabel>
            <Wrapper>
              <TextField
                type="number"
                value={quantity}
                onChange={(i) => setQuantity(parseInt(i.target.value))}
              />
              <StyledButton
                disabled={!quantity}
                variant="contained"
                onClick={() =>
                  modifyBasket({ ...(product as BasketItem), quantity })
                }
              >
                Add to Basket
              </StyledButton>
            </Wrapper>
          </div>
        </div>
      </ErrorAndLoadingHandler>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  place-items: start;
  > div {
    display: flex;
    align-items: center;
    width: 100%;
    flex-direction: column;
  }
`;

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  > button {
    margin-left: 10px;
  }
`;

const Image = styled.img`
  width: 60%;
`;

const StyledButton = styled(Button)`
  width: 100%;
  margin-top: 5px !important;
  margin-bottom: 5px !important;
`;

export default ProductDetailPage;
