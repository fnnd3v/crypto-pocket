import React from "react";
import { GlobalStyle } from "assets/styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "assets/styles/theme";
import MainTemplate from "components/templates/MainTemplate/MainTemplate";

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainTemplate>
        <div>chuj</div>
      </MainTemplate>
    </ThemeProvider>
  );
};

export default Root;
