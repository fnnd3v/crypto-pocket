import styled from "styled-components";

export const Title = styled.h1`
  font-size: ${({ isSmall, theme: { fontSize } }) => (isSmall ? fontSize.l : fontSize.xl)};
  color: ${({ theme }) => theme.colors.darkGrey};
`;
