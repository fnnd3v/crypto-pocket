import React, { useContext } from "react";
import {
  Img,
  MarketRankP,
  NameP,
  PriceChange24,
  PriceP,
  SymbolP,
  VolumeP,
  Wrapper,
} from "./CoinHandler.styles";

const CoinHandler = ({
  coin: {
    market_cap_rank: marketCapRank,
    name,
    symbol,
    image,
    current_price: price,
    price_change_percentage_24h: priceChange,
    total_volume: volume,
    id,
  },
  ...props
}) => {
  return (
    <Wrapper {...props}>
      <MarketRankP> {marketCapRank}. </MarketRankP>
      <Img src={image} />
      <NameP> {name}</NameP>
      <SymbolP> {symbol} </SymbolP>
      <PriceP> {price.toFixed(2)} $</PriceP>
      <PriceChange24 priceChange={priceChange}> {priceChange.toFixed(2)} % </PriceChange24>
      <VolumeP> {volume} $</VolumeP>
    </Wrapper>
  );
};

export default CoinHandler;
