import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../logo.svg";
import style from "styled-components";
import styled from "styled-components";

const StyledHeader = style.header`
  background-color: #02101f;
  padding: 10px 100px;
  display: flex;
  align-items: center;
`;

const StyledImg = style.img`
  height: 30px;
`;

const StyleNavLink = styled(NavLink)`
  color: #fff;
  margin-left: 30px;
  &.active {
    border-bottom: 1px solid #fff;
  }
`;

const Login = styled.div`
  margin-left: auto;
`;

const Button = styled.button`
  margin-left: 10px;
`;

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <StyledImg src={Logo} />
      <nav>
        <StyleNavLink to="/" exact>
          Home
        </StyleNavLink>
        <StyleNavLink to="/about" exact>
          About
        </StyleNavLink>
        <StyleNavLink to="/histroy" exact>
          Histroy
        </StyleNavLink>
      </nav>
      <Login>
        <Button>
          <StyleNavLink to="/login">登陆</StyleNavLink>
        </Button>
        <Button>
          <StyleNavLink to="/register">注册</StyleNavLink>
        </Button>
      </Login>
    </StyledHeader>
  );
};

export default Header;
