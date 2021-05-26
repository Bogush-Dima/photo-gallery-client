import React, { FC, useContext } from "react";
import { Wrapper } from "./styled";
import { Route, Switch, Link } from "react-router-dom";
import { Button } from "../../main-styled-components";
import { GALLERY, SIGN_IN, SIGN_UP } from "../../../constants/paths";
import { UserContext } from "../../../utils/contexts/user";

export const Header: FC = () => {
  const { setUser } = useContext(UserContext);
  const signOut = () => {
    localStorage.removeItem("token");
    setUser({
      id: "",
      email: "",
      gallery: [
        {
          img: "",
          _id: "",
        },
      ],
    });
  };

  return (
    <Wrapper>
      <Switch>
        <Route
          path={GALLERY}
          render={() => <Button onClick={signOut}>Sign Out</Button>}
        />
        <Route
          path={SIGN_IN}
          render={() => (
            <Link to={SIGN_UP}>
              <Button>Sign Up</Button>
            </Link>
          )}
        />
        <Route
          path={SIGN_UP}
          render={() => (
            <Link to={SIGN_IN}>
              <Button>Sign In</Button>
            </Link>
          )}
        />
      </Switch>
    </Wrapper>
  );
};
