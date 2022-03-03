import React, { useState } from "react";

export const PocketContext = React.createContext();

const PocketProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);

  window.transactions = transactions;

  const handleNewTransaction = (coin, quantity, price) => {
    const transaction = {
      coin,
      props: [
        {
          quantity,
          price,
        },
      ],
    };

    setTransactions([transaction, ...transactions]);
  };

  return (
    <PocketContext.Provider value={{ handleNewTransaction }}>
      {children}
    </PocketContext.Provider>
  );
};

export default PocketProvider;
