import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 60px;
  margin-bottom: 3px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.darkPurple};
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.colors.darkGrey};
  padding: 0 30px;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.black};
  }
`;

const MarketRankP = styled.p`
  width: 1%;
`;
const Img = styled.img`
  height: 50%;
`;
const NameP = styled.p`
  width: 14%;
  font-weight: bold;
`;
const SymbolP = styled.p`
  text-transform: uppercase;
  width: 14%;
`;
const PriceP = styled.p`
  width: 14%;
`;
const PriceChange24 = styled.p`
  width: 14%;
  color: ${({ priceChange, theme: { colors } }) =>
    priceChange > 0 ? colors.success : colors.error};
`;
const VolumeP = styled.p`
  width: 14%;
`;

const CoinHandler = ({
  coin: {
    market_cap_rank: marketCapRank,
    name,
    symbol,
    image,
    current_price: price,
    price_change_percentage_24h: priceChange,
    total_volume: volume,
  },
}) => {
  return (
    <Wrapper>
      <MarketRankP> {marketCapRank}. </MarketRankP>
      <Img src={image} />
      <NameP> {name}</NameP>
      <SymbolP> {symbol} </SymbolP>
      <PriceP> {price} $</PriceP>
      <PriceChange24 priceChange={priceChange}> {priceChange.toFixed(2)} % </PriceChange24>
      <VolumeP> {volume} $</VolumeP>
    </Wrapper>
  );
};

export default CoinHandler;
