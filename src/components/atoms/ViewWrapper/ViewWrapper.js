import styled from "styled-components";

export const ViewWrapper = styled.div`
  margin: 25px;
  background-color: ${({ theme }) => theme.colors.white};
  width: 95%;
  height: ${({ isArticle }) => (isArticle ? "auto" : "95%")};
  padding: ${({ isArticle }) => (isArticle ? "5px 10px" : "40px 50px")};
  border-radius: 25px;
`;
