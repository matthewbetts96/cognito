import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from "react";

export interface BasketItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  description: string;
}

interface BasketContextProps {
  basket: BasketItem[];
  clearBasket: () => void;
  modifyBasket: (item: BasketItem) => void;
  removeItem: (item: BasketItem) => void;
  getTotalCost: () => void;
}

export const BasketContext = createContext<BasketContextProps | undefined>(
  undefined
);

interface BasketProviderProps {
  children: ReactNode;
}

/**
 * Context API to handle the logic and storing of all the data
 * when adding/removing items from the basket
 */

export const BasketProvider: React.FC<BasketProviderProps> = ({ children }) => {
  const [basket, setBasket] = useState<BasketItem[]>(() => {
    // Get initial state from localStorage
    const savedBasket = localStorage.getItem("basket");
    return savedBasket ? JSON.parse(savedBasket) : [];
  });

  useEffect(() => {
    // Save basket state to localStorage whenever it changes
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);

  const modifyBasket = (item: BasketItem) => {
    const oldProduct = basket.find((i) => i.id === item.id);

    // If the item already exists within the basket, we need to modify the amount.
    // This function can work as both an addition and a subtraction from the basket
    // by just passing a positive or a negative number and then clearing the item if
    // it's count is 0
    if (oldProduct) {
      const newProduct = {
        ...oldProduct,
        quantity: oldProduct.quantity + item.quantity,
      };
      setBasket((prev) =>
        [...prev.filter((i) => i.id !== newProduct.id), newProduct]
          .filter((i) => i.quantity !== 0)
          .sort((a, b) => a.id - b.id)
      );
    } else {
      // if it doesn't exist, just add it as you normally would
      setBasket((prev) => [...prev, item].sort((a, b) => a.id - b.id));
    }
  };

  const removeItem = (item: BasketItem) => {
    setBasket(basket.filter((i) => i.id !== item.id));
  };

  const clearBasket = () => {
    setBasket([]);
  };

  const getTotalCost = () => {
    return basket
      .reduce((total: number, item: BasketItem) => {
        return total + item.price * item.quantity;
      }, 0)
      .toFixed(2);
  };

  return (
    <BasketContext.Provider
      value={{
        basket,
        clearBasket,
        modifyBasket,
        getTotalCost,
        removeItem,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
};

// Hook to use the basket context
export const useBasket = (): BasketContextProps => {
  const context = useContext(BasketContext);
  if (!context) {
    throw new Error("useBasket must be used within a BasketProvider");
  }
  return context;
};

export default useBasket;
