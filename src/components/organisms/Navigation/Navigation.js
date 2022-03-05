import React from "react";

import { Logo, StyledNavLink, Wrapper } from "./Navigation.styles";

const Navigation = () => {
  return (
    <Wrapper>
      <Logo>
        Crypto
        <br />
        Pocket
      </Logo>
      <StyledNavLink to="/dashboard">Dashboard</StyledNavLink>
      <StyledNavLink to="/pocket">Pocket</StyledNavLink>
      <StyledNavLink to="/profile">Profile</StyledNavLink>
    </Wrapper>
  );
};

export default Navigation;
