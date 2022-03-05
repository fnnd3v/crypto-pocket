import React, { useContext, useEffect, useState } from "react";

import { CryptoApiContext } from "providers/CryptoApiProvider";
import { Loading } from "components/atoms/Loading/Loading";

import {
  BuyPriceP,
  NameDiv,
  PriceP,
  ProfitP,
  QuantityP,
  Wrapper,
} from "./TransactionDetails.styles";

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
            <img src={img} alt="coin logo" /> {name}
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
