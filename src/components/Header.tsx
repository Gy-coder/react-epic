import React, { useEffect } from "react";
import { observer } from "mobx-react";
import { NavLink, useHistory } from "react-router-dom";
import Logo from "../banana.png";
import style from "styled-components";
import styled from "styled-components";
import { Button } from "antd";
import { useStores } from "../stores";

const StyledHeader = style.header`
  background: #4d4757;
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

const Header: React.FC = observer(() => {
  const { UserStore, AuthStore } = useStores();
  const histroy = useHistory();
  const handleLogin = () => {
    histroy.push("/login");
  };
  const handleLogout = () => {
    AuthStore.logout();
  };
  const handleRegister = () => {
    histroy.push("/register");
  };
  useEffect(() => {
    UserStore.pullUser();
  }, []);
  return (
    <StyledHeader>
      <NavLink to="/" exact>
        <StyledImg src={Logo} />
      </NavLink>
      <nav>
        <StyleNavLink to="/" exact>
          Home
        </StyleNavLink>
        <StyleNavLink to="/histroy" exact>
          Histroy
        </StyleNavLink>
        <StyleNavLink to="/about" exact>
          About
        </StyleNavLink>
      </nav>
      <Login>
        {UserStore.currentUser ? (
          <>
            <span style={{ color: "white" }}>
              {UserStore.currentUser.attributes.username}
            </span>
            <StyledButton
              type="primary"
              onClick={() => {
                handleLogout();
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
                handleLogin();
              }}
            >
              登陆
            </StyledButton>
            <StyledButton
              type="primary"
              onClick={() => {
                handleRegister();
              }}
            >
              注册
            </StyledButton>
          </>
        )}
      </Login>
    </StyledHeader>
  );
});

export default Header;
