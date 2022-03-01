import { Loading } from "components/atoms/Loading/Loading";
import ArticleWrapper from "components/molecules/ArticleWrapper/ArticleWrapper";
import { CryptoApiContext } from "providers/CryptoApiProvider";
import React, { useContext } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  grid-row: 1 / 3;
  grid-column: 3 / 3;
  border-left: 1px solid ${({ theme }) => theme.colors.darkPurple};
  padding: 50px;
  overflow-y: scroll;
  width: 100%;
  height: 100%;
`;

const Section = () => {
  const { articles } = useContext(CryptoApiContext);

  return (
    <Wrapper>
      {articles.length > 1 ? <div>artykuly</div> : <Loading />}

      {articles.map((article) => (
        <ArticleWrapper key={article.title} article={article} />
      ))}
    </Wrapper>
  );
};

export default Section;
