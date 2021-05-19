import React from "react";
import { GALLERY, SIGN_IN, SIGN_UP } from "../App/constants/paths";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Auth } from "../App/components/Auth";
import { Gallery } from "../App/components/Gallery";
import { useFormik } from "formik";

export const Router = () => {
  const userFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <BrowserRouter>
      <Switch>
        <Route
          path={SIGN_IN}
          render={({ history }) => (
            <Auth
              history={history}
              userFormik={userFormik}
              authMethod={SIGN_IN}
            />
          )}
        />
        <Route
          path={SIGN_UP}
          render={({ history }) => (
            <Auth
              history={history}
              userFormik={userFormik}
              authMethod={SIGN_UP}
            />
          )}
        />
        <Route path={GALLERY} component={Gallery} />
        <Redirect to={SIGN_IN} />
      </Switch>
    </BrowserRouter>
  );
};
