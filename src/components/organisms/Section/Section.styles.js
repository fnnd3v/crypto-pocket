import styled from "styled-components";

export const Wrapper = styled.div`
  grid-row: 1 / 3;
  grid-column: 3 / 3;
  border-left: 1px solid ${({ theme }) => theme.colors.darkPurple};
  padding: 50px;
  overflow-y: scroll;
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.colors.darkGrey};
`;
