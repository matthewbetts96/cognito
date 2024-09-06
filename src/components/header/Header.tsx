import styled from "styled-components";
import image from "assets/kiwk-e-mart.png";

export const Header = () => {
  return (
    <Wrapper>
      <img alt={"kwik-e-mart-logo"} src={image} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 60px;
  border: 1px solid green;
  position: fixed;
  width: 100%;
  background: red;
  z-index: 10;
`;

export default Header;
