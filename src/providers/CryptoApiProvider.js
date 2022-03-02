import axios from "axios";
import React, { useState, useEffect } from "react";

export const CryptoApiContext = React.createContext();

const CryptoApiProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);
  const [coinsMarket, setCoinsMarket] = useState([]);
  const [mainCurrency, setMainCurrency] = useState("usd");

  window.coinsMarket = coinsMarket;

  useEffect(() => {
    getMarket();
    getArticles();
  }, []);

  const getArticles = () => {
    const options = {
      method: "GET",
      url: "https://api.spaceflightnewsapi.net/v3/articles?_limit=15",
    };

    axios
      .request(options)
      .then(({ data }) => setArticles(data))
      .catch(function (error) {
        console.error(error);
      });
  };

  const getMarket = () => {
    const options = {
      method: "GET",
      url: `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${mainCurrency}&order=market_cap_desc&per_page=100&sparkline=false`,
    };

    axios
      .request(options)
      .then(({ data }) => setCoinsMarket(data))
      .catch((err) => console.log(err));
  };

  const getCoinValue = (coin) => {
    return axios
      .get(`https://api.coingecko.com/api/v3/coins/${coin}`)
      .then(({ data }) => data)
      .catch((err) => console.log(err));
  };

  const handleSearchCoin = (coin) => {
    return axios
      .get(`https://api.coingecko.com/api/v3/search?query=${coin}`)
      .then(({ data }) => data.coins)
      .catch((err) => console.log(err));
  };

  return (
    <CryptoApiContext.Provider
      value={{ articles, coinsMarket, getMarket, getCoinValue, handleSearchCoin }}
    >
      {children}
    </CryptoApiContext.Provider>
  );
};

export default CryptoApiProvider;
