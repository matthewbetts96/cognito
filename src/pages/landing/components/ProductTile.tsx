import { Button, InputLabel, Link, TextField } from "@mui/material";
import styled from "styled-components";
import image from "assets/duffBeer.png";
import { useState } from "react";
import { BasketItem, useBasket } from "context/BasketContext";

interface ProductTileProps {
  product: BasketItem;
}

const ProductTile = ({ product }: ProductTileProps) => {
  const { modifyBasket } = useBasket();
  const [quantity, setQuantity] = useState<number>(1);
  return (
    <Product>
      <Link href="#" underline="hover">
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
          onChange={(i) => setQuantity(parseInt(i.target.value))}
        />
        <StyledButton
          disabled={!quantity}
          variant="contained"
          onClick={() => modifyBasket({ ...product, quantity })}
        >
          Add to Cart
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
