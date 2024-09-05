import Basket from "components/basket/Basket";
import Landing from "pages/landing/Landing";
import Product from "pages/product/Product";
import { Route, Routes } from "react-router-dom";

export const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Basket />}>
          <Route index element={<Landing />} />
          <Route path="product" element={<Product />} />

          <Route path="*" element={<div>unknown</div>} />
        </Route>
      </Routes>
    </div>
  );
};

export default AppRoutes;
