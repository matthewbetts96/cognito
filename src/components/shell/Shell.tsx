import styled from "styled-components";
import { Outlet, useLocation } from "react-router-dom";
import Header from "components/header/Header";
import Basket from "pages/basket/components/basket/Basket";
import { MOBILE_SIZE_BREAKPOINT } from "../../constants";

interface PathProps {
  isLocationBasket: boolean;
}

/**
 * The shell component is present on every page and thus it should contain
 * any and all common elements that should be present, currently it only
 * includes the basket sidebar and the header, but is suitable for any other
 * items that could be used across the application
 */

/**
 * This is also why Shell and header are in the /components/ directory. I use the
 * pages directory to store the components (and sub components) of the specific pages
 * the /components/ directory is used for common components that can be used in more than
 * one area but are not explictally tied to the page. So something like a <Table /> or
 * <Button /> would belong here, but not <Basket />.
 */

export const Shell = () => {
  const { pathname } = useLocation();

  const isLocationBasket = pathname === "/basket";

  return (
    <ContentWrapper>
      <Header />
      <MainContentWrapper isLocationBasket={isLocationBasket}>
        <ScrollableChild isLocationBasket={isLocationBasket}>
          {/* The contents of the current page will be rendered here */}
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

// Using `shouldForwardProp` to prevent forwarding `isLocationBasket`to
// the dom and causing a console error from react
const MainContentWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isLocationBasket",
})<PathProps>`
  padding-top: 100px;
  display: flex;
  align-items: flex-start;
  width: 100%;
  height: 100vh;
  position: relative;
  ${(props) => props.isLocationBasket && "justify-content: center"};
`;

const ScrollableChild = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isLocationBasket",
})<PathProps>`
  width: 40%;
  border: 1px solid green;
  border-radius: 15px;
  padding: 10px;
  ${(props) => !props.isLocationBasket && "margin-left: 15%"};

  @media (max-width: ${MOBILE_SIZE_BREAKPOINT}px) {
    width: 100%;
    margin-right: 5%;
    margin-left: 5%;
  }
`;

const FixedChild = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isLocationBasket",
})<PathProps>`
  position: fixed;
  width: 20%;
  padding-top: 10px;
  border-left: 1px solid black;
  border-right: 1px solid black;
  height: calc(100vh - 60px);
  top: 50px;
  right: calc(50% - 32.5%);
  ${(props) => props.isLocationBasket && "display: none"};

  @media (max-width: ${MOBILE_SIZE_BREAKPOINT}px) {
    display: none;
  }
`;

export default Shell;
