import React from "react";

import { Button } from "components/atoms/Button/Button";
import { Input } from "components/atoms/Input/Input";
import { Label } from "components/atoms/Label/Label";
import { Title } from "components/atoms/Title/Title";

import {
  ButtonsWrapper,
  BuyButton,
  CoinNameDiv,
  CoinNameInputs,
  CoinWrapper,
  SellButton,
  TransactionContentWrapper,
  TransactionValueWrapper,
} from "./TransactionPanelSelectCoin.styles";

const TransactionPanelSelectCoin = ({
  setTransactionType,
  transactionType,
  transactionCoin,
  setTransactionQuantity,
  setTransactionCoinPrice,
  transactionQuantity,
  transactionCoinPrice,
  handleAddTransaction,
  formError,
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
                error={formError}
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
                error={formError}
              ></Input>
            </div>
          </CoinNameInputs>
          <TransactionValueWrapper>
            Total spent:
            <br />
            <span>$ {getTransactionValue()}</span>
          </TransactionValueWrapper>
          <Button onClick={handleAddTransaction}>add</Button>
        </CoinWrapper>
      </TransactionContentWrapper>
    </>
  );
};

export default TransactionPanelSelectCoin;
