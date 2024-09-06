import { useBasket } from "context/BasketContext";
import { useProductsQuery } from "hooks/useProductsQuery";
import styled from "styled-components";
import BasketProduct from "./components/BasketProduct";
import { List, ListItem, ListItemText } from "@mui/material";

export const Basket = () => {
  const { basket, clearBasket, modifyBasket } = useBasket();
  // const { data: products, isLoading, error } = useProductsQuery();

  // if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>Error fetching products</div>;

  console.log(basket);

  return (
    <BasketWrapper>
      Basket
      {/* <button
        onClick={() =>
          modifyBasket({
            description: "High-quality ground beef for your favorite recipes.",
            id: 2,
            name: "UK-Grade Ground Beef (1 lb)",
            price: 5.99,
            quantity: -1,
          })
        }
      >
        dlcuk
      </button> */}
      {/*  */}
      <BasketProductsWrapper>
        {basket.map((i) => {
          return <BasketProduct product={i} />;
        })}
      </BasketProductsWrapper>
      <div>
        <List dense={false}>
          <ListItem>
            <ListItemText primary={"Total amount"} secondary={`£`} />
          </ListItem>
        </List>
        <button onClick={() => clearBasket()}>clearBasket</button>
      </div>
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
