import { Button, List, ListItem, ListItemText } from "@mui/material";
import useBasket from "context/BasketContext";
import styled from "styled-components";

const BasketFooter = () => {
  const { basket, clearBasket, getTotalCost } = useBasket();
  return (
    <div>
      <List dense={false}>
        <ListItem>
          <ListItemText
            primary={"Total amount"}
            secondary={`£${getTotalCost()}`}
          />
        </ListItem>
      </List>
      <Container>
        <Button
          variant="contained"
          color={"error"}
          onClick={() => clearBasket()}
          disabled={basket.length <= 0}
        >
          Clear Basket
        </Button>
        <Button
          variant="contained"
          color={"success"}
          onClick={() =>
            alert("This would trigger a navigate() call to the payment page")
          }
          disabled={basket.length <= 0}
        >
          PAY
        </Button>
      </Container>
    </div>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-bottom: 10px;
`;

export default BasketFooter;
