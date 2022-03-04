import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 90%;
  height: 60px;
  background-color: red;
`;

const TransalactionDetailItem = ({
  price,
  transaction: { coin, id, props },
}) => {
  const [quantityCoin, setQuantity] = useState(props[0].quantity);
  const [coinPrice, setCoinPrice] = useState(props[0].price);
  const [coinId, setCoinId] = useState(coin);
  const [currentPrice, setCurrentPrice] = useState();

  //   setCurrentPrice(Object.getOwnPropertyDescriptor(price, coinId).value.usd)
  useEffect(() => {
    if (price === null) return;
    const value = Object.getOwnPropertyDescriptor(price, coinId).value.usd;

    setCurrentPrice(value);
  }, [price]);

  return (
    <Wrapper>
      <p>chuj</p>
    </Wrapper>
  );
};

// export default TransalactionDetailItem;
