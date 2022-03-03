import { Input } from "components/atoms/Input/Input";
import { Title } from "components/atoms/Title/Title";
import { CryptoApiContext } from "providers/CryptoApiProvider";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import debounce from "lodash.debounce";
import { Button } from "components/atoms/Button/Button";
import { Loading } from "components/atoms/Loading/Loading";
import { Label } from "components/atoms/Label/Label";
import { type } from "@testing-library/user-event/dist/type";

const Wrapper = styled.div`
  width: 100%;
  padding: 20px;
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

const ButtonsWrapper = styled.div`
  display: flex;

  width: 100%;
  height: 20%;
  justify-content: space-around;

  ${Button} {
    width: 45%;
    transition: background-color 0.5s;
    height: 40px;
  }
`;

const BuyButton = styled(Button)`
  background-color: ${({ type }) => (type === "buy" ? "#8FCB81" : "none")};
`;

const SellButton = styled(Button)`
  background-color: ${({ type }) => (type === "sell" ? "#FF8383" : "none")};
`;

const CoinWrapper = styled.div`
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;

  flex-wrap: wrap;

  ${Button} {
    width: 95%;
    height: 40px;
    margin-top: 30px;
    transition: background-color 0.3s ease-in-out, color 0.15s;
    text-transform: uppercase;

    &:hover {
      background-color: ${({ theme }) => theme.colors.blue};
      color: white;
    }
  }
`;

const CoinNameDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 95%;
  padding: 10px 20px;
  flex-basis: 10%;
  height: 50px;
  line-height: 50px;
  border: 1px solid ${({ theme }) => theme.colors.darkPurple};
  border-radius: 15px;
  color: ${({ theme }) => theme.colors.darkPurple};

  img {
    height: 80%;
    margin-right: 20px;
  }

  span {
    font-weight: bold;
    margin-right: 10px;
    color: ${({ theme }) => theme.colors.darkGrey};
  }
`;

const CoinNameInputs = styled.div`
  width: 95%;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;

  div {
    flex-basis: 45%;

    ${Input} {
      width: 100%;
      color: ${({ theme }) => theme.colors.darkGrey};
    }
  }
`;

const TransactionValueWrapper = styled.div`
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.lightPurple};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-top: 30px;
  width: 95%;
  padding: 10px;
  color: ${({ theme }) => theme.colors.darkGrey};

  span {
    color: black;
    margin: 5px 0;
    font-weight: bold;
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`;

const TransactionPanel = () => {
  const { handleSearchCoin } = useContext(CryptoApiContext);
  const [searchingCoin, setSearchingCoin] = useState("");
  const [transactionCoin, setTransactionCoin] = useState(null);
  const [transactionType, setTransactionType] = useState("buy");
  const [transactionQuantity, setTransactionQuantity] = useState(0);
  const [transactionCoinPrice, setTransactionCoinPrice] = useState(0);

  const [coins, setCoins] = useState([]);

  useEffect(() => {
    getInitialValue();
  }, []);

  const getSearchingCoins = debounce(async () => {
    let coins = await handleSearchCoin(searchingCoin);
    setCoins(coins);
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
    setTransactionCoin({
      id: coin.id,
      name: coin.name,
      img: coin.thumb,
      symbol: coin.symbol,
    });
  };

  window.transactionCoin = transactionCoin;
  window.transactionQuantity = transactionQuantity;
  window.transactionCoinPrice = transactionCoinPrice;

  const handleTransactionValue = (e) => {
    setTransactionType(e.target.dataset.type);
  };

  useEffect(() => {
    getTransactionValue();
  }, [transactionQuantity, transactionCoinPrice]);

  const getTransactionValue = () => {
    return transactionQuantity * transactionCoinPrice;
  };

  const handleChangeQuantity = (e) => {
    const value = e.target.value;
    if (value.length === 0) setTransactionQuantity(0);
    else setTransactionQuantity(parseFloat(value));
  };

  const handleChangeCoinPrice = (e) => {
    const value = e.target.value;
    if (value.length === 0) setTransactionCoinPrice(0);
    else setTransactionCoinPrice(parseFloat(value));
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
                disabled
              >
                SELL
              </SellButton>
            </ButtonsWrapper>
            <CoinWrapper>
              <CoinNameDiv>
                <img src={transactionCoin.img} alt="transaction coin" />
                <span> {transactionCoin.name}</span>
                {transactionCoin.symbol}
              </CoinNameDiv>
              <CoinNameInputs>
                <div>
                  <Label htmlFor="quantity">Quantity</Label>
                  <Input
                    placeholder="0.00"
                    onChange={handleChangeQuantity}
                    name="quantity"
                    id="quantity"
                    type="number"
                  ></Input>
                </div>
                <div>
                  <Label htmlFor="price">Price Per Coin</Label>
                  <Input
                    placeholder="$"
                    onChange={handleChangeCoinPrice}
                    name="price"
                    id="price"
                    type="number"
                  ></Input>
                </div>
              </CoinNameInputs>
              <TransactionValueWrapper>
                Total spent:
                <br />
                <span>$ {getTransactionValue()}</span>
              </TransactionValueWrapper>
              <Button>add</Button>
            </CoinWrapper>
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
              {coins.length ? (
                <>
                  {coins.map((coin) => {
                    return (
                      <li
                        onClick={() => handleTransactionCoin(coin)}
                        key={coin.id}
                      >
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
      )}
    </Wrapper>
  );
};

export default TransactionPanel;
