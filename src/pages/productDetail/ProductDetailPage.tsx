import { Button } from "@mui/material";
import { useProductQuery } from "hooks/useProductQuery";
import { Link } from "react-router-dom";
import image from "assets/duffBeer.png";
import styled from "styled-components";
import ErrorAndLoadingHandler from "components/errorAndLoadingHandler/LoadingHandler";

export const ProductDetailPage = () => {
  const { data, isLoading, error, refetch } = useProductQuery(1);

  return (
    <ErrorAndLoadingHandler
      isLoading={isLoading}
      error={error}
      refetch={refetch}
    >
      <Container>
        <Button>
          <Link to={"/"}>Back</Link>
        </Button>
        <Image alt={"duffBeer"} src={image}></Image>
        <div>{data && data.description}</div>
      </Container>
    </ErrorAndLoadingHandler>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
`;

const Image = styled.img`
  width: 80%;
`;

export default ProductDetailPage;
