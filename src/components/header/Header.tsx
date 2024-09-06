import styled from "styled-components";
import image from "assets/kiwk-e-mart.png";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Wrapper>
      <Link to={`/`}>
        <img alt={"kwik-e-mart-logo"} src={image} />
      </Link>
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
  align-content: center;
`;

export default Header;
