import { CryptoApiContext } from "providers/CryptoApiProvider";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import debounce from "lodash.debounce";
import TransactionPanelSelectCoin from "components/molecules/TransactionPanelSelectCoin/TransactionPanelSelectCoin";
import TransactionPanelProps from "components/molecules/TransactionPanelProps/TransactionPanelProps";
import { PocketContext } from "providers/PocketProvider";

const Wrapper = styled.div`
  width: 100%;
  padding: 20px;
`;

const TransactionPanel = ({ handleCloseModal }) => {
  //TODO: clear values

  const { handleSearchCoin } = useContext(CryptoApiContext);
  const { handleNewTransaction } = useContext(PocketContext);
  const [searchingCoin, setSearchingCoin] = useState("");
  const [transactionCoin, setTransactionCoin] = useState(null);
  const [transactionType, setTransactionType] = useState("buy");
  const [transactionQuantity, setTransactionQuantity] = useState(0);
  const [transactionCoinPrice, setTransactionCoinPrice] = useState(0);
  const [formError, setFormError] = useState(false);
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    getInitialValue();
  }, []);

  const getSearchingCoins = debounce(async () => {
    let coins = await handleSearchCoin(searchingCoin);
    setCoins(coins);
  }, 300);

  useEffect(() => {
    if (searchingCoin === " ") return setSearchingCoin("");
    if (searchingCoin.length === 0) return getInitialValue();
    getSearchingCoins();
  }, [searchingCoin]);

  const getInitialValue = async () => {
    let coins = await handleSearchCoin(" ");
    setCoins(coins.splice(0, 100));
  };

  window.transactionCoin = transactionCoin;

  const handleAddTransaction = (e) => {
    if (transactionCoinPrice === 0 || transactionQuantity === 0)
      return setFormError(true);

    setFormError(false);

    handleNewTransaction(
      transactionCoin.id,
      transactionQuantity,
      transactionCoinPrice
    );

    handleCloseModal();
  };

  useEffect(() => {
    getTransactionValue();
  }, [transactionQuantity, transactionCoinPrice]);

  const getTransactionValue = () => {
    return (transactionQuantity * transactionCoinPrice).toFixed(2);
  };

  window.searchingCoin = searchingCoin;
  return (
    <Wrapper>
      {transactionCoin ? (
        <TransactionPanelSelectCoin
          setTransactionType={setTransactionType}
          transactionType={transactionType}
          transactionCoin={transactionCoin}
          setTransactionQuantity={setTransactionQuantity}
          setTransactionCoinPrice={setTransactionCoinPrice}
          transactionQuantity={transactionQuantity}
          transactionCoinPrice={transactionCoinPrice}
          handleAddTransaction={handleAddTransaction}
          formError={formError}
        />
      ) : (
        <TransactionPanelProps
          searchingCoin={searchingCoin}
          setSearchingCoin={setSearchingCoin}
          coins={coins}
          setTransactionCoin={setTransactionCoin}
        />
      )}
    </Wrapper>
  );
};

export default TransactionPanel;
