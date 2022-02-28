import Navigation from "components/organisms/Navigation/Navigation";
import SearchBar from "components/organisms/SearchBar/SearchBar";
import Section from "components/organisms/Section/Section";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow-x: scroll;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-rows: 90px 1fr;
  grid-template-columns: 150px 1fr 0.75fr;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  overflow-y: hidden;
`;

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
