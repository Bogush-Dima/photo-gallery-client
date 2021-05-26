import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import { UserContext } from "../../../../utils/contexts/user";
import {
  GALLERY,
  SERVER,
  AUTH,
  ROOT,
  SIGN_IN,
  SIGN_UP,
} from "../../../../constants/paths";
import { Gallery } from "../../Gallery";
import { Auth } from "../../Auth";

export const useRoutes = (
  isLoading: boolean,
  setIsLoading: Dispatch<SetStateAction<boolean>>
) => {
  const initialUserValue = {
    id: "",
    email: "",
    gallery: [
      {
        img: "",
        _id: "",
      },
    ],
  };

  const [user, setUser] = useState(initialUserValue);
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
    if (!user.id && token) {
      setIsLoading(true);
      axios
        .post(`${SERVER}${AUTH}${ROOT}`, { token })
        .then((res) => {
          const { id, email, gallery } = res.data;
          setIsLoading(false);
          setUser({ id, email, gallery });
        })
        .catch((err) => {
          setIsLoading(false);
          console.log(err);
        });
    }
  }, [user, setIsLoading]);

  if (user.id) {
    return (
      <UserContext.Provider value={{ user, setUser }}>
        <Switch>
          <Route path={GALLERY} component={Gallery} />
          <Redirect to={GALLERY} />
        </Switch>
      </UserContext.Provider>
    );
  }

  return (
    <UserContext.Provider value={{ user, setUser }}>
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
        <Redirect to={SIGN_IN} />
      </Switch>
    </UserContext.Provider>
  );
};
