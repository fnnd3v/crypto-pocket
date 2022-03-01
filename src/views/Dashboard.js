import { Loading } from "components/atoms/Loading/Loading";
import { Title } from "components/atoms/Title/Title";
import { ViewWrapper } from "components/atoms/ViewWrapper/ViewWrapper";
import CoinHandler from "components/molecules/CoinHandler/CoinHandler";
import { CryptoApiContext } from "providers/CryptoApiProvider";
import React, { useContext, useEffect } from "react";
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
  const { coinsMarket, getMarket } = useContext(CryptoApiContext);

  useEffect(() => {
    getMarket();
  }, []);

  return (
    <Wrapper>
      <Title> Dashboard </Title>
      <ContentWrapper>
        {coinsMarket.length > 1 ? (
          coinsMarket.map((coin) => <CoinHandler key={coin.id} coin={coin} />)
        ) : (
          <Loading />
        )}
      </ContentWrapper>
    </Wrapper>
  );
};

export default Dashboard;
