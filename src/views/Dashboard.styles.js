import styled from "styled-components";

export const Wrapper = styled.div`
  width: 95%;
  height: 95%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 25px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 10px 40px;
  border-radius: 25px;
  position: relative;
`;

export const ContentWrapper = styled.div`
  position: absolute;
  top: 10%;
  left: 0;
  right: 0;
  bottom: 10%;
  padding: 5px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  overflow-y: scroll;
`;
