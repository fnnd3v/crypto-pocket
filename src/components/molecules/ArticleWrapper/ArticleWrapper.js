import React from "react";
import styled from "styled-components";
import newsIcon from "assets/icons/news.png";
import { Title } from "components/atoms/Title/Title";
import { ViewWrapper } from "components/atoms/ViewWrapper/ViewWrapper";
import { Button } from "components/atoms/Button/Button";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  /* background-color: tomato; */
  display: flex;
  flex-direction: column;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const StyledImg = styled.img`
  height: 100%;
  margin-right: 20px;
`;

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
