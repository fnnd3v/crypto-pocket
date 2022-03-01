import styled from "styled-components";

export const Wrapper = styled.div`
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

export const MarketRankP = styled.p`
  width: 1%;
`;
export const Img = styled.img`
  height: 50%;
`;
export const NameP = styled.p`
  width: 14%;
  font-weight: bold;
`;
export const SymbolP = styled.p`
  text-transform: uppercase;
  width: 14%;
`;
export const PriceP = styled.p`
  width: 14%;
`;
export const PriceChange24 = styled.p`
  width: 14%;
  color: ${({ priceChange, theme: { colors } }) =>
    priceChange > 0 ? colors.success : colors.error};
`;
export const VolumeP = styled.p`
  width: 14%;
`;
