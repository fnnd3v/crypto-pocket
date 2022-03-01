import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  grid-row: 1 / 2;
  grid-column: 2 / 3;
  width: 100%;
  height: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.darkPurple};
`;

const SearchBar = () => {
  return (
    <Wrapper>
      <p>seachr bar</p>
    </Wrapper>
  );
};

export default SearchBar;
