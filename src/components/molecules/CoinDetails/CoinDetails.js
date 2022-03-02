import React from "react";
import { Wrapper } from "./CoinDetails.styles";
import addToFavIcon from "assets/icons/favourite-black.png";
import FavIcon from "assets/icons/favourite.png";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  img {
    height: 44px;
    margin-right: 20px;
  }

  p {
    margin: 0;
    padding: 0;
  }
`;
const PriceBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;
`;
const NameP = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xxl};
  color: ${({ theme }) => theme.colors.darkGrey};
`;
const PriceP = styled.p`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.l};
`;

const CoinDetails = ({
  currentCoin: {
    id,
    symbol,
    description,
    name,
    image: { small: imageSmall },
    market_data: {
      ath: { usd: marketAth },
      current_price: { usd: marketPrice },
      market_cap_rank: marketRank,
    },
  },
}) => {
  return (
    <Wrapper>
      <HeaderWrapper>
        <img src={imageSmall} />
        <PriceBox>
          <NameP> {name} </NameP>
          <PriceP> {marketPrice.toFixed(2)} $ </PriceP>
        </PriceBox>
      </HeaderWrapper>
    </Wrapper>
  );
};

export default CoinDetails;
