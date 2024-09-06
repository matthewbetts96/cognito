//I honestly am sure what to call this, 'shell' is the best idea that comes to mind as it surrounds the app and is always visible

import Basket from "components/basket/Basket";
import Header from "components/header/Header";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

export const Shell = () => {
  return (
    <ContentWrapper>
      <Header />
      <MainContentWrapper>
        <ScrollableChild>
          {/* Content is rendered here in this Outlet component based on the route that the user is currently on*/}
          <Outlet />
        </ScrollableChild>

        <FixedChild>
          <Basket />
        </FixedChild>
      </MainContentWrapper>
    </ContentWrapper>
  );
};

const ContentWrapper = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
`;

const MainContentWrapper = styled.div`
  padding-top: 100px;
  display: flex;
  align-items: flex-start;
  width: 100%;
  height: 100vh;
  position: relative;
`;

const ScrollableChild = styled.div`
  width: 40%;
  margin-left: 15%;
  background-color: lightcoral;
  padding: 10px;
  @media (max-width: 768px) {
    width: 100%;
    margin-right: 5%;
    margin-left: 5%;
  }
`;

const FixedChild = styled.div`
  position: fixed;
  width: 20%;
  background-color: lightblue;
  height: 100vh;
  top: 50px;
  right: calc(50% - 32.5%);

  @media (max-width: 768px) {
    display: none;
  }
`;

export default Shell;
