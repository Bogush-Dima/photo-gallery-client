import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { GlobalStyle } from "./main-styles-components";
import { SignUp } from "./components/SignUp";
import { SignIn } from "./components/SignIn";
import { Gallery } from "./components/Gallery";

export const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route path="/signIn" component={SignIn} />
        <Route path="/signUp" component={SignUp} />
        <Route path="/gallery" component={Gallery} />
        <Redirect to="signIn" />
      </Switch>
    </BrowserRouter>
  );
};
