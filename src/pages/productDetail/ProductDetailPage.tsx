import { Button } from "@mui/material";
import { useProductQuery } from "hooks/useProductQuery";
import { Link } from "react-router-dom";
import image from "assets/duffBeer.png";
import styled from "styled-components";
import LoadingHandler from "components/loadingHandler/LoadingHandler";
import ErrorHandler from "components/errorHandler/ErrorHandler";

export const ProductDetailPage = () => {
  const { data, isLoading, error, refetch } = useProductQuery(1);

  return (
    <LoadingHandler isLoading={isLoading}>
      <ErrorHandler error={error} refetch={refetch}>
        <Container>
          <Button>
            <Link to={"/"}>Back</Link>
          </Button>
          <Image alt={"duffBeer"} src={image}></Image>
          <div>{data && data.description}</div>
        </Container>
      </ErrorHandler>
    </LoadingHandler>
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
