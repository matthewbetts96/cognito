import { BasketItem, useBasket } from "context/BasketContext";
import { useProductsQuery } from "hooks/useProductsQuery";
import styled from "styled-components";
import image from "assets/duffBeer.png";

export const Landing = () => {
  const { addToBasket, basket } = useBasket();
  const { data: products, isLoading, error } = useProductsQuery();

  return (
    <Foo>
      {products &&
        products.map((product: BasketItem) => {
          return (
            <Product>
              <Image alt={"duffBeer"} src={image}></Image>
              {product.name}
            </Product>
          );
        })}
    </Foo>
  );
};

const Image = styled.img`
  height: 100px;
  width: 100px;
`;

const Foo = styled.div`
  display: flex;
  height: 100%;
  overflow: auto;
  flex-flow: wrap;
`;

const Product = styled.div`
  width: 100px;
  justify-content: center;
  padding: 20px;
  border: 1px solid red;
  margin: 1%;
`;

export default Landing;
