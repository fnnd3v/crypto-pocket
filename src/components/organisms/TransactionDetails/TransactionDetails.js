import { Loading } from "components/atoms/Loading/Loading";
import TransalactionDetailItem from "components/molecules/TransalactionDetailItem/TransalactionDetailItem";
import { CryptoApiContext } from "providers/CryptoApiProvider";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.li`
  width: 100%;
  height: 60px;
  margin-bottom: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.m};
  background-color: ${({ theme }) => theme.colors.lightPurple};
  border-radius: 16px;
  padding: 0 16px;
  ${Loading} {
    height: 100%;
  }
  ${Loading}::after {
    height: 40px;
    width: 40px;
  }
`;

const NameDiv = styled.div`
  width: 30%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-weight: bold;
  img {
    margin-right: 5px;
  }
`;

const PriceP = styled.p`
  width: 25%;
  text-align: right;
`;
const QuantityP = styled.p`
  width: 10%;
  text-align: right;
`;
const BuyPriceP = styled.p`
  width: 20%;
  text-align: right;
`;

const ProfitP = styled.p`
  width: 15%;
  text-align: right;
  font-weight: bold;
`;

const TransactionDetails = ({
  handleProfit,
  transaction: { coin, id, props, img, name },
}) => {
  console.log(img);
  //TODO: clean code
  const { getCoinsPriceById } = useContext(CryptoApiContext);
  const [price, setPrice] = useState(null);
  const [quantityCoin, setQuantity] = useState(props[0].quantity);
  const [coinPrice, setCoinPrice] = useState(props[0].price);
  const [coinId, setCoinId] = useState(coin);
  const [coinTransactionId, setCoinTransactionId] = useState(id);
  const [currentPrice, setCurrentPrice] = useState();
  const [profit, setProfit] = useState();

  window.currentPrice = currentPrice;

  useEffect(() => {
    getPrice();
  }, []);

  const getPrice = async () => {
    const price = await getCoinsPriceById(coin);
    setPrice(price);
  };

  useEffect(() => {
    if (price === null) return;
    const value = Object.getOwnPropertyDescriptor(price, coinId).value.usd;

    setCurrentPrice(value);

    handleProfit(coinPrice, quantityCoin, value, setProfit);
  }, [price]);

  return (
    <Wrapper>
      {currentPrice ? (
        <>
          <NameDiv>
            <img src={img} /> {name}
          </NameDiv>

          <PriceP>{coinPrice}$</PriceP>
          <QuantityP>{quantityCoin} </QuantityP>
          <BuyPriceP> {currentPrice}$ </BuyPriceP>
          <ProfitP>{profit} $</ProfitP>
        </>
      ) : (
        <Loading />
      )}
    </Wrapper>
  );
};

export default TransactionDetails;
