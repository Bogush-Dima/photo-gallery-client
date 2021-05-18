import React, { useEffect, useState } from "react";
import { GALLERY, ROOT, SIGN_IN, SIGN_UP } from "../App/constants/paths";
import { requestToServer } from "../actions/requestToServer";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { SignIn } from "../App/components/SignIn";
import { SignUp } from "../App/components/SignUp";
import { Gallery } from "../App/components/Gallery";

export const Router = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("token");
    requestToServer(ROOT, { token })
  }, []);


  return (
    <BrowserRouter>
      <Switch>
        <Route path={SIGN_IN} component={SignIn} />
        <Route path={SIGN_UP} component={SignUp} />
        <Route path={GALLERY} component={Gallery} />
        <Redirect to={SIGN_IN} />
      </Switch>
    </BrowserRouter>
  );
};
