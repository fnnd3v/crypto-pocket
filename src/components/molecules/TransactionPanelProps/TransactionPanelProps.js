import React from "react";

import { Input } from "components/atoms/Input/Input";
import { Loading } from "components/atoms/Loading/Loading";
import { Title } from "components/atoms/Title/Title";
import {
  Container,
  TransactionContentWrapper,
} from "./TransactionPanelProps.styles";

const TransactionPanelProps = ({
  searchingCoin,
  setSearchingCoin,
  coins,
  setTransactionCoin,
  handleAddTransaction,
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
