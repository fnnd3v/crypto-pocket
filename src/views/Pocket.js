import { Button } from "components/atoms/Button/Button";
import { Title } from "components/atoms/Title/Title";
import { CryptoApiContext } from "providers/CryptoApiProvider";
import PocketProvider, { PocketContext } from "providers/PocketProvider";
import React, { useContext, useState } from "react";
import styled from "styled-components";
import ValueIcon from "assets/icons/btc-usd.png";
import ValueChange from "assets/icons/support.png";
import ProfitIcon from "assets/icons/profits.png";
import LossIcon from "assets/icons/loss.png";
import useModal from "components/organisms/Modal/useModal";
import TransactionPanel from "components/organisms/TransactionPanel/TransactionPanel";

const Wrapper = styled.div`
  width: 95%;
  height: 95%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 25px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 10px 40px;
  border-radius: 25px;
  display: grid;
  grid-template-columns: 30% 1fr;
`;

const ManageWrapper = styled.div`
  width: 100%;
  height: 100%;
  border-right: 1px solid ${({ theme }) => theme.colors.darkPurple};
`;
const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
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

const Pocket = () => {
  const [portfolioValue, setPortfolioValue] = useState(0);
  const [ProfitLoss, setProfitLoss] = useState(0);
  const { Modal, isOpen, handleOpenModal, handleCloseModal } = useModal();

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
      <ContentWrapper></ContentWrapper>
      {isOpen ? (
        <Modal handleClose={handleCloseModal}>
          <TransactionPanel handleCloseModal={handleCloseModal} />
        </Modal>
      ) : null}
    </Wrapper>
  );
};

export default Pocket;
