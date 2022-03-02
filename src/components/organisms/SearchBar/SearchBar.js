import { Input } from "components/atoms/Input/Input";
import { CryptoApiContext } from "providers/CryptoApiProvider";
import React, { useContext, useEffect, useState } from "react";
import { Wrapper } from "./SearchBar.styles";
import styled from "styled-components";
import useModal from "components/organisms/Modal/useModal";
import debounce from "lodash.debounce";
import CoinDetails from "components/molecules/CoinDetails/CoinDetails";

const InfoWrapper = styled.div`
  flex-basis: 20%;
  padding: 20px;
  span {
    font-weight: bold;
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`;

const SearchWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 50px;

  input {
    width: 100%;
  }
`;

const SearchResults = styled.ul`
  position: absolute;
  width: 90%;
  max-height: 400px;
  overflow-y: scroll;
  background-color: blue;
  top: 55%;
  z-index: 111;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.lightPurple};
  list-style: none;
  padding-top: 20px;
  padding: 10px;

  li {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 15px;
    height: 40px;
    border-radius: 10px;
    margin: 10px;
    background-color: #fff;
    cursor: pointer;

    img {
      height: 70%;
      margin: 0 20px 0 0;
    }

    span {
      font-weight: bold;
      margin-left: 5px;
    }
  }
`;

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
    getSearchingCoins(searchingCoin);
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
        <span> P. Jachym </span>
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
