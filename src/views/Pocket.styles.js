import styled from "styled-components";

import { Button } from "components/atoms/Button/Button";

export const Wrapper = styled.div`
  width: 95%;
  height: 95%;
  max-height: 95%;
  margin: 25px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 10px 15px;
  border-radius: 25px;
  display: grid;
  grid-template-columns: 30% 1fr;
  grid-template-rows: 100%;
  position: relative;
`;

export const ManageWrapper = styled.div`
  height: 100%;
  flex-grow: 0.3;
  border-right: 1px solid ${({ theme }) => theme.colors.darkPurple};
`;
export const ContentWrapper = styled.ul`
  max-height: 100%;
  height: 90%;
  flex-grow: 0.7;
  grid-row: 1 / 1;
  position: absolute;
  grid-column: 2/2;
  width: 100%;
  right: 0;
  top: 0;
  overflow-y: scroll;
  padding-right: 5px;
  list-style: none;
`;
export const SettingsWrapper = styled.div`
  width: 100%;
  height: 100%;
  border-top: 1px solid ${({ theme }) => theme.colors.darkPurple};

  ${Button} {
    width: 95%;
  }
`;

export const DetailsWrapper = styled.div`
  width: 100%;
  height: 78%;
  border-top: 1px solid ${({ theme }) => theme.colors.darkPurple};
  padding: 10px 0;
`;

export const StyledDetail = styled.div`
  width: 100%;
  height: 34px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  padding: 0 5px;

  img {
    height: 100%;
    margin-right: 10px;
  }

  span {
    flex-grow: 1;
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

export const Holder = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.m};
`;

export const NameP = styled.p`
  width: 25%;
  padding: 0 10px;
`;

export const PriceP = styled.p`
  width: 25%;

  text-align: right;
  padding: 0 15px;
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
  padding: 0 10px;
`;
