import React from "react";
import { GlobalStyle } from "assets/styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "assets/styles/theme";
import MainTemplate from "components/templates/MainTemplate/MainTemplate";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <Routes>
            <Route path="/" exact element={<Dashboard />} />
          </Routes>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
