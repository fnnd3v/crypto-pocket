import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
`;

export const InfoWrapper = styled.div`
  flex-basis: 20%;
  padding: 20px;
  span {
    font-weight: bold;
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`;

export const SearchWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 50px;

  input {
    width: 100%;
  }
`;

export const SearchResults = styled.ul`
  position: absolute;
  width: 90%;
  max-height: 400px;
  overflow-y: scroll;
  background-color: blue;
  top: 55%;
  z-index: 111;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.lightPurple};
  list-style: none;
  padding-top: 20px;
  padding: 10px;

  li {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 15px;
    height: 40px;
    border-radius: 10px;
    margin: 10px;
    background-color: #fff;
    cursor: pointer;

    img {
      height: 70%;
      margin: 0 20px 0 0;
    }

    span {
      font-weight: bold;
      margin-left: 5px;
    }
  }
`;
