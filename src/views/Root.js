import React from "react";
import { GlobalStyle } from "assets/styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "assets/styles/theme";

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div>root</div>
    </ThemeProvider>
  );
};

export default Root;
