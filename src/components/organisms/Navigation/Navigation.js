import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-right: 1px solid ${({ theme }) => theme.colors.darkPurple};
  justify-content: flex-start;
  padding: 30px 0;
  grid-row: 1 / 3;
  grid-column: 1 / 1;
`;

const Logo = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.darkPurple};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-weight: bold;
`;

const Navigation = () => {
  return (
    <Wrapper>
      <Logo>
        Crypto
        <br />
        Pocket
      </Logo>
      <p>naviagtion</p>
    </Wrapper>
  );
};

export default Navigation;
