import { Input } from "components/atoms/Input/Input";
import { Title } from "components/atoms/Title/Title";
import { CryptoApiContext } from "providers/CryptoApiProvider";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import debounce from "lodash.debounce";
import { Button } from "components/atoms/Button/Button";

const Wrapper = styled.div`
  width: 100%;

  padding: 20px;
`;
const TransactionContentWrapper = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.darkPurple};
  width: 100%;
  padding: 20px;
  height: 400px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  ${Input} {
    width: 90%;
  }
`;

const Container = styled.ul`
  /* background-color: ${({ theme }) => theme.colors.lightPurple}; */
  width: 90%;
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

const ButtonsWrapper = styled.div`
  display: flex;

  width: 100%;
  height: 20%;
  justify-content: space-around;

  ${Button} {
    width: 45%;
    transition: background-color 0.5s;
  }
`;

const BuyButton = styled(Button)`
  background-color: ${({ type }) => (type === "buy" ? "#8FCB81" : "none")};
`;

const SellButton = styled(Button)`
  background-color: ${({ type }) => (type === "sell" ? "#FF8383" : "none")};
`;

const TransactionPanel = () => {
  const { handleSearchCoin } = useContext(CryptoApiContext);
  const [searchingCoin, setSearchingCoin] = useState("");
  const [transactionCoin, setTransactionCoin] = useState(null);
  const [transactionType, setTransactionType] = useState("buy");

  const [coins, setCoins] = useState([]);

  useEffect(() => {
    getInitialValue();
  }, []);

  const getSearchingCoins = debounce(async () => {
    let coins = await handleSearchCoin(searchingCoin);
    setCoins(coins);
    console.log(coins);
  }, 300);

  useEffect(() => {
    if (searchingCoin === " ") return setSearchingCoin("");
    if (searchingCoin.length === 0) return getInitialValue();
    getSearchingCoins();
  }, [searchingCoin]);

  const getInitialValue = async () => {
    let coins = await handleSearchCoin(" ");
    setCoins(coins.splice(0, 100));
  };

  const handleTransactionCoin = (coin) => {
    setTransactionCoin(coin);
  };

  const handleTransactionValue = (e) => {
    setTransactionType(e.target.dataset.type);
  };

  window.searchingCoin = searchingCoin;
  return (
    <Wrapper>
      {transactionCoin ? (
        <>
          <Title> Transaction </Title>
          <TransactionContentWrapper>
            <ButtonsWrapper>
              <BuyButton
                onClick={(e) => handleTransactionValue(e)}
                type={transactionType}
                data-type="buy"
              >
                BUY
              </BuyButton>
              <SellButton
                onClick={(e) => handleTransactionValue(e)}
                type={transactionType}
                data-type="sell"
              >
                SELL
              </SellButton>
            </ButtonsWrapper>
          </TransactionContentWrapper>
        </>
      ) : (
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
              {coins.map((coin) => {
                return (
                  <li onClick={() => handleTransactionCoin(coin.id)} key={coin.id}>
                    <img src={coin.thumb} /> {coin.name}
                    <span> ({coin.symbol})</span>
                  </li>
                );
              })}
            </Container>
          </TransactionContentWrapper>
        </>
      )}
    </Wrapper>
  );
};

export default TransactionPanel;
