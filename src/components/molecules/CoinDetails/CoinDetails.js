import React from "react";

const CoinDetails = ({ currentCoin }) => {
  window.details = currentCoin;

  console.log(currentCoin);
  return <div> {currentCoin.id} </div>;
};

export default CoinDetails;
