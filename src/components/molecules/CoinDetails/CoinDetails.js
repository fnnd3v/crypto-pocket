import React from "react";
import { ChartWrapper, CoinWrapper, Img, StyledName, Wrapper } from "./CoinDetails.styles";

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
      <CoinWrapper>
        <Img src={imageSmall} />
        <StyledName> {name} </StyledName>
      </CoinWrapper>
      <ChartWrapper></ChartWrapper>
    </Wrapper>
  );
};

export default CoinDetails;
