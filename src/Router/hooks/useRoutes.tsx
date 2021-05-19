import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { GALLERY, SIGN_IN, SIGN_UP } from "../../App/constants/paths";
import { Gallery } from "../../App/components/Gallery";
import { Auth } from "../../App/components/Auth";
import { useFormik } from "formik";

export const useRoutes = (isAuthenticated: any, setUser: any) => {
  const userFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  if (isAuthenticated) {
    return (
      <Switch>
        <Route path={GALLERY} component={Gallery} />
        <Redirect to={GALLERY} />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route
        path={SIGN_IN}
        render={({ history }) => (
          <Auth
            history={history}
            userFormik={userFormik}
            authMethod={SIGN_IN}
            setUser={setUser}
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
            setUser={setUser}
          />
        )}
      />
      <Redirect to={SIGN_IN} />
    </Switch>
  );
};
