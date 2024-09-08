import { Button, InputLabel, TextField } from "@mui/material";
import styled from "styled-components";
import image from "assets/duffBeer.png";
import { useState } from "react";
import { BasketItem, useBasket } from "context/BasketContext";

import { Link } from "react-router-dom";

interface ProductTileProps {
  product: BasketItem;
}

const ProductTile = ({ product }: ProductTileProps) => {
  const { modifyBasket } = useBasket();
  const [quantity, setQuantity] = useState<number>(1);
  return (
    <Product>
      <Link to={`product/${product.id}`}>
        {/* 
          Usually we'd get the image of the product from the API, 
          however I'm just hardcoding it here as it looks better with an image 
        */}
        <Image alt={"duffBeer"} src={image}></Image>
        <Name>{product.name}</Name>
      </Link>

      <div>
        <InputLabel htmlFor="standard-adornment-amount">
          £{product.price}
        </InputLabel>
        <TextField
          type="number"
          value={quantity}
          onChange={(i) => {
            // While the number text field does not allow you to enter a negative
            // MUI's provided up/down arrows do, this is a fix to disallow users
            // to be able to enter a negative number of products to the basket
            if (parseInt(i.target.value) >= 0) {
              setQuantity(parseInt(i.target.value));
              return;
            }
            setQuantity(0);
          }}
        />
        <StyledButton
          disabled={!quantity}
          variant="contained"
          onClick={() => modifyBasket({ ...product, quantity })}
        >
          Add to Basket
        </StyledButton>
      </div>
    </Product>
  );
};

const StyledButton = styled(Button)`
  width: 100%;
  margin-top: 5px !important;
  margin-bottom: 5px !important;
`;

const Name = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const Product = styled.div`
  width: 150px;
  display: flex;
  flex-direction: column;
  place-content: space-between;
  align-items: center;
  padding: 25px;
  border: 1px solid red;
  border-radius: 15px;
  margin: 1%;
  text-align: center;
`;

const Image = styled.img`
  height: 100px;
  width: 100px;
`;

export default ProductTile;
