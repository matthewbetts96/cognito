import { Typography } from "@mui/material";
import styled from "styled-components";

const BasketHeader = () => {
  return (
    <Container>
      <Typography variant="h3">Basket</Typography>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 10px;
  display: flex;
  justify-content: center;
`;

export default BasketHeader;
