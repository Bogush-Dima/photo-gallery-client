import React from "react";
import { GlobalStyle } from "./main-styled-components";
import { Router } from "./components/Router";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
};
