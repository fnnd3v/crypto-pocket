import React, { useContext, useEffect, useState } from "react";
import debounce from "lodash.debounce";

import { CryptoApiContext } from "providers/CryptoApiProvider";
import useModal from "components/organisms/Modal/useModal";
import CoinDetails from "components/molecules/CoinDetails/CoinDetails";
import { Input } from "components/atoms/Input/Input";

import {
  InfoWrapper,
  SearchResults,
  SearchWrapper,
  Wrapper,
} from "./SearchBar.styles";

const SearchBar = () => {
  const [matchingCoins, setMatchingCoins] = useState([]);
  const [searchingCoin, setSearchingCoin] = useState("");
  const { Modal, isOpen, handleOpenModal, handleCloseModal } = useModal();
  const { handleSearchCoin, getCoinValue } = useContext(CryptoApiContext);
  const [currentCoin, setCurrentCoin] = useState(null);

  const getSearchingCoins = debounce(async () => {
    let coins = await handleSearchCoin(searchingCoin);
    setMatchingCoins(coins);
    console.log(matchingCoins);
  }, 300);

  useEffect(() => {
    if (searchingCoin.length === 0) setMatchingCoins([]);
    if (!searchingCoin) return;
    getSearchingCoins();
  }, [searchingCoin, handleSearchCoin]);

  const handleCurrentCoin = async (coinId) => {
    setSearchingCoin("");
    console.log(coinId);
    const coin = await getCoinValue(coinId);
    setCurrentCoin(coin);
    console.log(coin);
    handleOpenModal();
  };

  return (
    <Wrapper>
      <InfoWrapper>
        Logged as:
        <br />
        <span> Jachym </span>
      </InfoWrapper>
      <SearchWrapper>
        <Input
          placeholder="find coin"
          value={searchingCoin}
          onChange={(e) => setSearchingCoin(e.target.value)}
          name="Search"
          id="search"
        ></Input>
        {matchingCoins.length ? (
          <SearchResults>
            {matchingCoins.map((coin) => {
              return (
                <li onClick={() => handleCurrentCoin(coin.id)} key={coin.id}>
                  <img src={coin.thumb} /> {coin.name}
                  <span> ({coin.symbol})</span>
                </li>
              );
            })}
          </SearchResults>
        ) : null}
      </SearchWrapper>
      {isOpen ? (
        <Modal handleClose={handleCloseModal}>
          <CoinDetails currentCoin={currentCoin} />
        </Modal>
      ) : null}
    </Wrapper>
  );
};

export default SearchBar;
