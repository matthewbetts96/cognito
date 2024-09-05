import { useBasket } from "context/BasketContext";
import { useProductsQuery } from "hooks/useProductsQuery";
import styled from "styled-components";

export const Basket = () => {
  const { addToBasket, basket } = useBasket();
  const { data: products, isLoading, error } = useProductsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching products</div>;

  console.log(products, basket);

  return (
    <Foo>
      <button
        onClick={() =>
          addToBasket({
            id: Math.random().toFixed(),
            name: "string",
            price: 1,
            quantity: 1,
          })
        }
      >
        dlcuk
      </button>
    </Foo>
  );
};

const Foo = styled.div`
  width: 20%;
  border: 1px solid red;
  margin: 1%;
`;

export default Basket;
