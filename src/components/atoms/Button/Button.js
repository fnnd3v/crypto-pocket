import styled from "styled-components";

export const Button = styled.button`
  margin: 15px 0;
  padding: ${({ isBig }) => (isBig ? "10px 38px" : "7px 20px")};
  font-size: ${({ isBig, theme: { fontSize } }) => {
    return isBig ? fontSize.m : fontSize.s;
  }};
  background-color: ${({ theme }) => theme.colors.lightPurple};
  border-radius: 20px;
  border: none;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.darkGrey};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  position: relative;
  top: 0;
  left: 0;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.darkPurple};
  }
`;
