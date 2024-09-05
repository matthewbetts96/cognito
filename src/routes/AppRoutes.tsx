import Shell from "components/shell/Shell";
import Landing from "pages/landing/Landing";
import Product from "pages/product/Product";
import { Route, Routes } from "react-router-dom";

//App routes pulled out of <App /> as if the app gets larger, the routes portion can get very complicated
export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Shell />}>
        <Route index element={<Landing />} />
        <Route path="product" element={<Product />} />
        <Route path="*" element={<div>unknown</div>} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
