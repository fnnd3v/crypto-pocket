import React, { useContext, useEffect, useState } from "react";

import useModal from "components/organisms/Modal/useModal";
import TransactionDetails from "components/organisms/TransactionDetails/TransactionDetails";
import TransactionPanel from "components/organisms/TransactionPanel/TransactionPanel";
import { Title } from "components/atoms/Title/Title";
import { PocketContext } from "providers/PocketProvider";
import { Button } from "components/atoms/Button/Button";

import {
  Wrapper,
  ManageWrapper,
  ContentWrapper,
  SettingsWrapper,
  DetailsWrapper,
  StyledDetail,
  Holder,
  NameP,
  PriceP,
  QuantityP,
  BuyPriceP,
  ProfitP,
} from "./Pocket.styles";

import LossIcon from "assets/icons/loss.png";
import ValueIcon from "assets/icons/btc-usd.png";
import ValueChange from "assets/icons/support.png";
import ProfitIcon from "assets/icons/profits.png";

const Pocket = () => {
  const [portfolioValue, setPortfolioValue] = useState(0);
  const [ProfitLoss, setProfitLoss] = useState(0);
  const { Modal, isOpen, handleOpenModal, handleCloseModal } = useModal();
  const { transactions } = useContext(PocketContext);

  window.transactions = transactions;

  const handleProfit = (coinPrice, coinQuantity, currentPrice, setProfit) => {
    console.log(currentPrice);
    const profit = coinQuantity * currentPrice - coinPrice * coinQuantity;
    setProfit(profit.toFixed(2));
  };

  useEffect(() => {
    if (transactions.length === 0) return;
  }, [transactions]);

  const handleOpenAddAsset = () => {
    handleOpenModal();
  };

  return (
    <Wrapper>
      <ManageWrapper>
        <Title> Pocket </Title>
        <SettingsWrapper>
          <Button onClick={handleOpenAddAsset}>ADD</Button>
          <Button>USD / ETH</Button>
          <DetailsWrapper>
            <StyledDetail>
              <img src={ValueIcon} alt="total value" />
              <span> value</span>
              {portfolioValue}
            </StyledDetail>
            <StyledDetail>
              <img src={ValueChange} alt="value change" />
              <span> 24h change </span>
              {portfolioValue}
            </StyledDetail>
            <StyledDetail>
              <img src={ProfitIcon} alt="profit/loss" />
              <span> Total profit/loss </span>
              {portfolioValue}
            </StyledDetail>
          </DetailsWrapper>
        </SettingsWrapper>
      </ManageWrapper>
      <ContentWrapper>
        <Holder>
          <NameP>coin</NameP>
          <PriceP>buy price</PriceP>
          <QuantityP>amount</QuantityP>
          <BuyPriceP>price</BuyPriceP>
          <ProfitP>profit/loss</ProfitP>
        </Holder>
        {transactions.map((transaction) => {
          return (
            <TransactionDetails
              handleProfit={handleProfit}
              transaction={transaction}
              key={transaction.id}
            />
          );
        })}
      </ContentWrapper>
      {isOpen ? (
        <Modal handleClose={handleCloseModal}>
          <TransactionPanel handleCloseModal={handleCloseModal} />
        </Modal>
      ) : null}
    </Wrapper>
  );
};

export default Pocket;
