import styled from "styled-components";

export const Header = () => {
  return <Wrapper>HeaDER</Wrapper>;
};

const Wrapper = styled.div`
  min-height: 50px;
  border: 1px solid green;
  position: fixed;
  width: 100%;
  background: red;
  z-index: 10;
`;

export default Header;
