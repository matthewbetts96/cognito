import Basket from "./components/basket/Basket";

/**
 * While this page is mostly redundant as it just uses <Basket />, the
 * thought is to keep the file structure consistant across pages. The
 * <Basket /> may be the only element on the BasketPage for now, but
 * if this were a real application, that wouldn't be the case for long.
 * @returns
 */
export const BasketPage = () => {
  return <Basket />;
};

export default BasketPage;
