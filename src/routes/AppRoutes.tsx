import Shell from "components/shell/Shell";
import BasketPage from "pages/basket/BasketPage";
import LandingPage from "pages/landing/LandingPage";
import ProductDetailPage from "pages/productDetail/ProductDetailPage";
import { Route, Routes } from "react-router-dom";

//App routes pulled out of <App /> as if the app gets larger, the routes portion can get very complicated
export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Shell />}>
        <Route index element={<LandingPage />} />
        <Route path="/basket" element={<BasketPage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="*" element={<div>Page Unknown</div>} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
