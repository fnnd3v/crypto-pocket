import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";

import CryptoApiProvider from "providers/CryptoApiProvider";
import PocketProvider from "providers/PocketProvider";
import Dashboard from "./Dashboard";
import Pocket from "./Pocket";
import Profile from "./Profile";
import MainTemplate from "components/templates/MainTemplate/MainTemplate";

import { GlobalStyle } from "assets/styles/GlobalStyle";
import { theme } from "assets/styles/theme";

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <CryptoApiProvider>
          <PocketProvider>
            <MainTemplate>
              <Routes>
                <Route path="*" element={<Navigate to="/dashboard" />} />
                <Route path="/dashboard" exact element={<Dashboard />} />
                <Route path="/pocket" exact element={<Pocket />} />
                <Route path="/profile" exact element={<Profile />} />
              </Routes>
            </MainTemplate>
          </PocketProvider>
        </CryptoApiProvider>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
