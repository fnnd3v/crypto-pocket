import React, { useContext } from "react";

import { CryptoApiContext } from "providers/CryptoApiProvider";
import ArticleWrapper from "components/molecules/ArticleWrapper/ArticleWrapper";
import { Loading } from "components/atoms/Loading/Loading";

import { Wrapper } from "./Section.styles";

const Section = () => {
  const { articles } = useContext(CryptoApiContext);

  return (
    <Wrapper>
      {articles.length > 1 ? <div>Articles</div> : <Loading />}

      {articles.map((article) => (
        <ArticleWrapper key={article.title} article={article} />
      ))}
    </Wrapper>
  );
};

export default Section;
