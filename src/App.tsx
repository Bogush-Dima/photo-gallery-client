import React from "react";
import { GlobalStyle } from "./main-styles-components";
import { SignUp } from "./components/SignUp";
import { SignIn } from "./components/SignIn";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <SignUp />
    </>
  );
};
