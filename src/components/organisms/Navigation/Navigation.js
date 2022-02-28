import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

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
  background-color: ${({ theme }) => theme.colors.darkGrey};
  display: flex;
  height: 50px;
  justify-content: flex-end;
  align-items: center;
  font-weight: bold;
  margin-bottom: 50px;
  color: ${({ theme }) => theme.colors.white};
`;

const activeClassName = "active-link";
const StyledNavLink = styled(NavLink)`
  width: 100%;
  margin-top: 10px;
  padding: 10px;
  text-align: end;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.darkGrey};
  font-weight: bold;
  position: relative;
`;

const Navigation = () => {
  return (
    <Wrapper>
      <Logo>
        Crypto
        <br />
        Pocket
      </Logo>
      <StyledNavLink to="/">Dashboard</StyledNavLink>
      <StyledNavLink to="/pocket">Pocket</StyledNavLink>
      <StyledNavLink to="profile">Profile</StyledNavLink>
    </Wrapper>
  );
};

export default Navigation;
