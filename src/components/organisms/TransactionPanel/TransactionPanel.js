import { CryptoApiContext } from "providers/CryptoApiProvider";
import React, { useContext } from "react";

const TransactionPanel = () => {
  const { handleSearchCoin } = useContext(CryptoApiContext);

  return (
    <div>
      <p>transaction</p>
    </div>
  );
};

export default TransactionPanel;
