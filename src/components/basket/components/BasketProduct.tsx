import { IconButton, List, ListItem, ListItemText } from "@mui/material";
import { BasketItem } from "context/BasketContext";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

interface BasketProductProps {
  product: BasketItem;
}

const BasketProduct = ({ product }: BasketProductProps) => {
  return (
    <List dense={false}>
      <ListItem
        secondaryAction={
          <>
            <IconButton edge="end" aria-label="delete">
              <RemoveCircleIcon />
            </IconButton>
            <IconButton edge="end" aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </>
        }
      >
        <ListItemText
          primary={product.name}
          secondary={`£${product.price} x ${product.quantity}`}
        />
      </ListItem>
    </List>
  );
};

export default BasketProduct;
