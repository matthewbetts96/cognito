//I honestly am sure what to call this, 'shell' is the best idea that comes to mind as it surrounds the app and is always visible

import Basket from "components/basket/Basket";
import Footer from "components/footer/Footer";
import Header from "components/header/Header";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

export const Shell = () => {
  return (
    <ContentWrapper>
      <Header />
      <MainContentWrapper>
        {/* Content is rendered here in this Outlet component based on the route that the user is currently on*/}
        <Outlet />
        <Basket />
      </MainContentWrapper>
      <Footer />
    </ContentWrapper>
  );
};

const ContentWrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
`;

const MainContentWrapper = styled.div`
  width: 100%;
  justify-content: center;
  padding-top: 100px;
  flex: 1 1 auto;
  display: flex;
  margin: auto;
`;

export default Shell;
