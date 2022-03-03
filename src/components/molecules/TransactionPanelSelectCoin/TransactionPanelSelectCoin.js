import { Button } from "components/atoms/Button/Button";
import { Input } from "components/atoms/Input/Input";
import { Label } from "components/atoms/Label/Label";
import { Title } from "components/atoms/Title/Title";
import React from "react";
import styled from "styled-components";

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
  height: 40px;
  line-height: 30px;
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

const BuyButton = styled(Button)`
  background-color: ${({ type }) => (type === "buy" ? "#8FCB81" : "none")};

  &:hover {
    background-color: #80b674;
  }
`;

const SellButton = styled(Button)`
  background-color: ${({ type }) => (type === "sell" ? "#FF8383" : "none")};
`;

const TransactionPanelSelectCoin = ({
  setTransactionType,
  transactionType,
  transactionCoin,
  setTransactionQuantity,
  setTransactionCoinPrice,
  transactionQuantity,
  transactionCoinPrice,
}) => {
  const handleTransactionValue = (e) => {
    setTransactionType(e.target.dataset.type);
  };

  const handleChangeCoinPrice = (e) => {
    const value = e.target.value;
    if (value.length === 0) setTransactionCoinPrice(0);
    else setTransactionCoinPrice(parseFloat(value));
  };

  const handleChangeQuantity = (e) => {
    const value = e.target.value;
    if (value.length === 0) setTransactionQuantity(0);
    else setTransactionQuantity(parseFloat(value));
  };

  const getTransactionValue = () => {
    return (transactionQuantity * transactionCoinPrice).toFixed(2);
  };

  return (
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
  );
};

export default TransactionPanelSelectCoin;
