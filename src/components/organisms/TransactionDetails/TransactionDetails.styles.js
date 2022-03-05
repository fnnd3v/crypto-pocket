import { Loading } from "components/atoms/Loading/Loading";
import styled from "styled-components";

export const Wrapper = styled.li`
  width: 100%;
  height: 60px;
  margin-bottom: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.darkPurple};
  font-size: ${({ theme }) => theme.fontSize.l};
  background-color: ${({ theme }) => theme.colors.lightPurple};
  border-radius: 16px;
  padding: 0 10px;
  ${Loading} {
    height: 100%;
  }
  ${Loading}::after {
    height: 40px;
    width: 40px;
  }
`;

export const NameDiv = styled.div`
  width: 25%;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-weight: bold;
  img {
    margin-right: 8px;
  }
`;

export const PriceP = styled.p`
  width: 25%;
  padding: 0 10px;
  text-align: right;
`;
export const QuantityP = styled.p`
  width: 10%;
  text-align: right;
`;
export const BuyPriceP = styled.p`
  width: 20%;
  text-align: right;
`;

export const ProfitP = styled.p`
  width: 20%;

  text-align: right;
  font-weight: bold;
`;
