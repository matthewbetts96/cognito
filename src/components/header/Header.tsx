import styled from "styled-components";
import image from "assets/kiwk-e-mart.png";
import { Link, useNavigate } from "react-router-dom";
import { MenuItem, Typography } from "@mui/material";

export const Header = () => {
  const navigate = useNavigate();

  const pages = [
    { name: "Products", route: "/" },
    { name: "Basket", route: "/basket" },
  ];

  return (
    <Wrapper>
      <Link to={`/`}>
        <img alt={"kwik-e-mart-logo"} src={image} />
      </Link>

      {pages.map((i) => {
        return (
          <MenuItem key={i.name} onClick={() => navigate(i.route)}>
            <Typography sx={{ textAlign: "center" }}>{i.name}</Typography>
          </MenuItem>
        );
      })}
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
  display: flex;
`;

export default Header;
