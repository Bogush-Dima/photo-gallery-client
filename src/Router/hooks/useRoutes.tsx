import React, { SetStateAction, useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import {
  GALLERY,
  SERVER,
  AUTH,
  ROOT,
  SIGN_IN,
  SIGN_UP,
} from "../../App/constants/paths";
import { Gallery } from "../../App/components/Gallery";
import { Auth } from "../../App/components/Auth";
import { useFormik } from "formik";
import axios from "axios";

export const useRoutes = (user: any, setUser: SetStateAction<any>) => {
  const userFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!user && token) {
      axios
        .post(`${SERVER}${AUTH}${ROOT}`, { token })
        .then((res) => {
          const { userId, email } = res.data;
          setUser({ userId, email });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  if (user) {
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
