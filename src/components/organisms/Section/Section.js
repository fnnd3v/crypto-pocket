import { Loading } from "components/atoms/Loading/Loading";
import { CryptoApiContext } from "providers/CryptoApiProvider";
import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  grid-row: 1 / 3;
  grid-column: 3 / 3;
  border-left: 1px solid ${({ theme }) => theme.colors.darkPurple};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 50px;
  overflow-y: scroll;
  width: 100%;
  height: 100%;
`;

const Section = () => {
  const { getNews, articles } = useContext(CryptoApiContext);
  getNews();

  return <Wrapper>{articles.length > 1 ? <div>artykuly</div> : <Loading />}</Wrapper>;
};

export default Section;
