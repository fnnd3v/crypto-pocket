import React from "react";
import { GlobalStyle } from "assets/styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "assets/styles/theme";
import MainTemplate from "components/templates/MainTemplate/MainTemplate";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Pocket from "./Pocket";
import Profile from "./Profile";
import CryptoApiProvider from "providers/CryptoApiProvider";

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <CryptoApiProvider>
          <MainTemplate>
            <Routes>
              <Route path="/" exact element={<Dashboard />} />
            </Routes>
            <Routes>
              <Route path="/pocket" exact element={<Pocket />} />
            </Routes>
            <Routes>
              <Route path="/profile" exact element={<Profile />} />
            </Routes>
          </MainTemplate>
        </CryptoApiProvider>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
