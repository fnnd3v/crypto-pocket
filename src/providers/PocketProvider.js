import React, { useState } from "react";

export const PocketContext = React.createContext();

const PocketProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);

  const handleNewTransaction = (coin, quantity, price, id, img, name) => {
    const transaction = {
      coin,
      name,
      id,
      img,
      props: [
        {
          quantity,
          price,
        },
      ],
    };

    setTransactions([...transactions, transaction]);
  };

  return (
    <PocketContext.Provider value={{ handleNewTransaction, transactions }}>
      {children}
    </PocketContext.Provider>
  );
};

export default PocketProvider;
