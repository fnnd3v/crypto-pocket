import { Loading } from "components/atoms/Loading/Loading";
import { Title } from "components/atoms/Title/Title";
import CoinDetails from "components/molecules/CoinDetails/CoinDetails";
import CoinHandler from "components/molecules/CoinHandler/CoinHandler";
import useModal from "components/organisms/Modal/useModal";
import { CryptoApiContext } from "providers/CryptoApiProvider";
import React, { useContext, useEffect, useState } from "react";
import { ContentWrapper, Wrapper } from "./Dashboard.styles";

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
    console.log(coin);
    handleOpenModal();
  };

  return (
    <Wrapper>
      <Title> Dashboard </Title>
      <ContentWrapper>
        {coinsMarket.length > 1 ? (
          coinsMarket.map((coin) => (
            <CoinHandler
              onClick={() => handleCurrentCoin(coin.id)}
              key={coin.id}
              coin={coin}
            />
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
