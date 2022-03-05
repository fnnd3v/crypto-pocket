import React from "react";

import {
  HeaderWrapper,
  NameP,
  PriceBox,
  PriceP,
  Wrapper,
} from "./CoinDetails.styles";

import FavIcon from "assets/icons/favourite.png";
import addToFavIcon from "assets/icons/favourite-black.png";

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
        <img src={imageSmall} alt="coin logo" />
        <PriceBox>
          <NameP> {name} </NameP>
          <PriceP> {marketPrice.toFixed(2)} $ </PriceP>
        </PriceBox>
      </HeaderWrapper>
    </Wrapper>
  );
};

export default CoinDetails;
