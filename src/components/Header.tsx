import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../logo.svg";
import style from "styled-components";
import styled from "styled-components";
import { Button } from "antd";

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

const StyledButton = styled(Button)`
  margin-left: 10px;
`;

const Header: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
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
        {isLogin ? (
          <>
            你好 jirengu{" "}
            <StyledButton
              onClick={() => {
                setIsLogin(false);
              }}
            >
              注销
            </StyledButton>
          </>
        ) : (
          <>
            <StyledButton
              type="primary"
              onClick={() => {
                setIsLogin(true);
              }}
            >
              登陆
            </StyledButton>
            <StyledButton type="primary">注册</StyledButton>
          </>
        )}
      </Login>
    </StyledHeader>
  );
};

export default Header;
