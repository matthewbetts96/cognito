import Basket from "components/basket/Basket";
import Header from "components/header/Header";
import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";

interface PathProps {
  isLocationBasket: boolean;
}

export const Shell = () => {
  const { pathname } = useLocation();

  const isLocationBasket = pathname === "/basket";

  return (
    <ContentWrapper>
      <Header />
      <MainContentWrapper isLocationBasket={isLocationBasket}>
        <ScrollableChild isLocationBasket={isLocationBasket}>
          {/* Content is rendered here in this Outlet component based on the route that the user is currently on*/}
          <Outlet />
        </ScrollableChild>

        <FixedChild isLocationBasket={isLocationBasket}>
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

const MainContentWrapper = styled.div<PathProps>`
  padding-top: 100px;
  display: flex;
  align-items: flex-start;
  width: 100%;
  height: 100vh;
  position: relative;
  ${(props) => props.isLocationBasket && "justify-content: center"};
`;

const ScrollableChild = styled.div<PathProps>`
  width: 40%;
  border: 1px solid green;
  border-radius: 15px;
  padding: 10px;
  ${(props) => !props.isLocationBasket && "margin-left: 15%"};

  @media (max-width: 768px) {
    width: 100%;
    margin-right: 5%;
    margin-left: 5%;
  }
`;

const FixedChild = styled.div<PathProps>`
  position: fixed;
  width: 20%;
  padding-top: 10px;
  border-left: 1px solid black;
  border-right: 1px solid black;
  height: calc(100vh - 60px);
  top: 50px;
  right: calc(50% - 32.5%);
  ${(props) => props.isLocationBasket && "display: none"};

  @media (max-width: 768px) {
    display: none;
  }
`;

export default Shell;
