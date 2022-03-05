import React from "react";

import { Title } from "components/atoms/Title/Title";
import { ViewWrapper } from "components/atoms/ViewWrapper/ViewWrapper";
import { Button } from "components/atoms/Button/Button";

import { ContentWrapper, StyledImg, Wrapper } from "./ArtcileWrapper.styles";

import newsIcon from "assets/icons/news.png";

const ArticleWrapper = ({ article: { title, url, summary } }) => {
  return (
    <ViewWrapper isArticle>
      <Wrapper>
        <Title isSmall> {title} </Title>
        <ContentWrapper>
          <StyledImg src={newsIcon} />
          <p> {summary} </p>
        </ContentWrapper>
        <Button as="a" _blank href={url}>
          Reade more
        </Button>
      </Wrapper>
    </ViewWrapper>
  );
};

export default ArticleWrapper;
