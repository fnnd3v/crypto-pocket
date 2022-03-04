import { Button } from "components/atoms/Button/Button";
import { Title } from "components/atoms/Title/Title";
import { CryptoApiContext } from "providers/CryptoApiProvider";
import PocketProvider, { PocketContext } from "providers/PocketProvider";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import ValueIcon from "assets/icons/btc-usd.png";
import ValueChange from "assets/icons/support.png";
import ProfitIcon from "assets/icons/profits.png";
import LossIcon from "assets/icons/loss.png";
import useModal from "components/organisms/Modal/useModal";
import TransactionPanel from "components/organisms/TransactionPanel/TransactionPanel";
import TransactionDetails from "components/organisms/TransactionDetails/TransactionDetails";

const Wrapper = styled.div`
  width: 95%;
  height: 95%;
  max-height: 95%;
  margin: 25px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 10px 15px;
  border-radius: 25px;
  display: grid;
  grid-template-columns: 30% 1fr;
  grid-template-rows: 100%;
  position: relative;
`;

const ManageWrapper = styled.div`
  height: 100%;
  flex-grow: 0.3;
  border-right: 1px solid ${({ theme }) => theme.colors.darkPurple};
`;
const ContentWrapper = styled.ul`
  max-height: 100%;
  height: 90%;
  flex-grow: 0.7;
  grid-row: 1 / 1;
  position: absolute;
  grid-column: 2/2;
  width: 100%;
  right: 0;
  top: 0;
  overflow-y: scroll;
  padding-right: 5px;
  list-style: none;
`;
const SettingsWrapper = styled.div`
  width: 100%;
  height: 100%;
  border-top: 1px solid ${({ theme }) => theme.colors.darkPurple};

  ${Button} {
    width: 95%;
  }
`;

const DetailsWrapper = styled.div`
  width: 100%;
  height: 78%;
  border-top: 1px solid ${({ theme }) => theme.colors.darkPurple};
  padding: 10px 0;
`;

const StyledDetail = styled.div`
  width: 100%;
  height: 34px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  padding: 0 5px;

  img {
    height: 100%;
    margin-right: 10px;
  }

  span {
    flex-grow: 1;
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

const Hodler = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.m};
`;

const NameP = styled.p`
  width: 25%;
  padding: 0 10px;
`;

const PriceP = styled.p`
  width: 25%;

  text-align: right;
  padding: 0 15px;
`;
const QuantityP = styled.p`
  width: 10%;
  text-align: right;
`;
const BuyPriceP = styled.p`
  width: 20%;
  text-align: right;
`;

const ProfitP = styled.p`
  width: 20%;

  text-align: right;
  font-weight: bold;
  padding: 0 10px;
`;

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
              <img src={ValueIcon} />
              <span> value</span>
              {portfolioValue}
            </StyledDetail>
            <StyledDetail>
              <img src={ValueChange} />
              <span> 24h change </span>
              {portfolioValue}
            </StyledDetail>
            <StyledDetail>
              <img src={ProfitIcon} />
              <span> Total profil/loss </span>
              {portfolioValue}
            </StyledDetail>
          </DetailsWrapper>
        </SettingsWrapper>
      </ManageWrapper>
      <ContentWrapper>
        <Hodler>
          <NameP>coin</NameP>
          <PriceP>buy price</PriceP>
          <QuantityP>amount</QuantityP>
          <BuyPriceP>current price</BuyPriceP>
          <ProfitP>profil/loss</ProfitP>
        </Hodler>
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
