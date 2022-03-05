import React from "react";

import Navigation from "components/organisms/Navigation/Navigation";
import SearchBar from "components/organisms/SearchBar/SearchBar";
import Section from "components/organisms/Section/Section";

import { Wrapper } from "./MainTemplate.styles";

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      <SearchBar />
      {children}
      <Section />
    </Wrapper>
  );
};

export default MainTemplate;
