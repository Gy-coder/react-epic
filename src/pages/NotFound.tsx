import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NotFound: React.FC = () => {
  return <Wrapper>您要的页面不存在 404</Wrapper>;
};

export default NotFound;
