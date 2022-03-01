import axios from "axios";
import React, { useState } from "react";

export const CryptoApiContext = React.createContext();

const CryptoApiProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);

  const getNews = () => {
    const options = {
      method: "GET",
      url: "https://crypto-news-live3.p.rapidapi.com/news/cryptonews.com",
      headers: {
        "x-rapidapi-host": "crypto-news-live3.p.rapidapi.com",
        "x-rapidapi-key": "635aa96644msh580d703a5339e3bp199c01jsn9d6419943f07",
      },
    };

    axios
      .request(options)
      .then(({ data }) => setArticles(data))
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <CryptoApiContext.Provider value={{ articles, getNews, articles }}>
      {children}
    </CryptoApiContext.Provider>
  );
};

export default CryptoApiProvider;
