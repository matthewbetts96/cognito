import { Button, List, ListItem, ListItemText } from "@mui/material";
import { useBasket } from "context/BasketContext";

const BasketFooter = () => {
  const { clearBasket, getTotalCost } = useBasket();
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
      <Button variant="contained" color={"error"} onClick={() => clearBasket()}>
        clearBasket
      </Button>
      <Button
        variant="contained"
        color={"success"}
        onClick={() => clearBasket()}
      >
        PAY
      </Button>
    </div>
  );
};

export default BasketFooter;
