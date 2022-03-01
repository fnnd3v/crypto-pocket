import { Loading } from "components/atoms/Loading/Loading";
import { Title } from "components/atoms/Title/Title";
import { ViewWrapper } from "components/atoms/ViewWrapper/ViewWrapper";
import CoinDetails from "components/molecules/CoinDetails/CoinDetails";
import CoinHandler from "components/molecules/CoinHandler/CoinHandler";
import useModal from "components/organisms/Modal/useModal";
import { CryptoApiContext } from "providers/CryptoApiProvider";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";

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
  position: relative;
`;

const ContentWrapper = styled.div`
  position: absolute;
  top: 10%;
  left: 0;
  right: 0;
  bottom: 10%;
  padding: 5px;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  overflow-y: scroll;
`;

const Dashboard = () => {
  const { coinsMarket, getMarket, getCoinValue } = useContext(CryptoApiContext);
  const [currentCoin, setCurrentCoin] = useState(null);
  const { Modal, isOpen, handleOpenModal, handleCloseModal } = useModal();

  useEffect(() => {
    getMarket();
  }, []);

  const handleCurrentCoin = async (coinId) => {
    const coin = await getCoinValue(coinId);
    setCurrentCoin(coin);
    handleOpenModal();
  };

  return (
    <Wrapper>
      <Title> Dashboard </Title>
      <ContentWrapper>
        {coinsMarket.length > 1 ? (
          coinsMarket.map((coin) => (
            <CoinHandler onClick={() => handleCurrentCoin(coin.id)} key={coin.id} coin={coin} />
          ))
        ) : (
          <Loading />
        )}
      </ContentWrapper>
      {isOpen ? (
        <Modal handleClose={handleCloseModal}>
          <CoinDetails currentCoin={currentCoin} />
        </Modal>
      ) : null}
    </Wrapper>
  );
};

export default Dashboard;
