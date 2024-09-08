import { IconButton, List, ListItem, ListItemText } from "@mui/material";
import { BasketItem, useBasket } from "context/BasketContext";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

interface BasketProductProps {
  product: BasketItem;
}

const BasketProduct = ({ product }: BasketProductProps) => {
  const { modifyBasket, removeItem } = useBasket();

  return (
    <List dense={false}>
      <ListItem
        secondaryAction={
          <>
            <IconButton
              edge="end"
              aria-label="delete-one"
              data-testid={`delete-one-${product.id}`}
              onClick={() =>
                modifyBasket({
                  ...product,
                  quantity: -1,
                })
              }
            >
              <RemoveCircleIcon />
            </IconButton>

            <IconButton
              edge="end"
              data-testid={`delete-all-${product.id}`}
              aria-label="delete-all"
              onClick={() => removeItem(product)}
            >
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
