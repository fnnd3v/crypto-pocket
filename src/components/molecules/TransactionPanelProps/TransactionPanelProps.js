import { Input } from "components/atoms/Input/Input";
import { Loading } from "components/atoms/Loading/Loading";
import { Title } from "components/atoms/Title/Title";
import React from "react";
import styled from "styled-components";

const Container = styled.ul`
  /* background-color: ${({ theme }) => theme.colors.lightPurple}; */
  width: 90%;
  height: 400px;
  flex-grow: 1;
  list-style: none;
  margin: 0;
  padding: 0;
  border-radius: 20px;
  overflow-y: scroll;

  li {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border: 1px solid ${({ theme }) => theme.colors.darkPurple};
    padding-left: 15px;
    height: 40px;
    border-radius: 10px;
    margin: 10px;
    font-size: ${({ theme }) => theme.fontSize.l};
    background-color: #fff;
    cursor: pointer;
    transition: background-color 0.3s;
    font-weight: bold;

    img {
      height: 70%;
      margin: 0 20px 0 0;
    }

    span {
      margin-left: 5px;
      font-weight: lighter;
    }

    &:hover {
      background-color: ${({ theme }) => theme.colors.lightPurple};
    }
  }
`;

const TransactionContentWrapper = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.darkPurple};
  width: 100%;
  padding: 20px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  ${Input} {
    width: 90%;
  }
`;

const TransactionPanelProps = ({
  searchingCoin,
  setSearchingCoin,
  coins,
  setTransactionCoin,
}) => {
  const handleTransactionCoin = (coin) => {
    setTransactionCoin({
      id: coin.id,
      name: coin.name,
      img: coin.thumb,
      symbol: coin.symbol,
    });
  };

  return (
    <>
      <Title> Select coin </Title>
      <TransactionContentWrapper>
        <Input
          placeholder="find coin"
          value={searchingCoin}
          onChange={(e) => setSearchingCoin(e.target.value)}
          name="Search"
          id="search"
        ></Input>

        <Container>
          {coins.length ? (
            <>
              {coins.map((coin) => {
                return (
                  <li onClick={() => handleTransactionCoin(coin)} key={coin.id}>
                    <img src={coin.thumb} alt="xd" /> {coin.name}
                    <span> ({coin.symbol})</span>
                  </li>
                );
              })}
            </>
          ) : (
            <Loading />
          )}
        </Container>
      </TransactionContentWrapper>
    </>
  );
};

export default TransactionPanelProps;
