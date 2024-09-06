import Basket from "components/basket/Basket";
import Shell from "components/shell/Shell";
import Landing from "pages/landing/Landing";
import ProductDetailPage from "pages/productDetail/ProductDetailPage";
import { Route, Routes } from "react-router-dom";

//App routes pulled out of <App /> as if the app gets larger, the routes portion can get very complicated
export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Shell />}>
        <Route index element={<Landing />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="*" element={<div>Page Unknown</div>} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
