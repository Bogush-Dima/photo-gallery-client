import axios from "axios";
import * as H from "history/index";
import {
  AUTH,
  SERVER,
  SIGN_IN,
  SIGN_UP,
} from "../../App/constants/paths";
import { FormikValues } from "formik";

export const requestToServer = (
  authMethod: string,
  values: FormikValues | string,
  history: H.History,
  setUser: (arg: string) => string
): void => {
  axios
    .post(`${SERVER}${AUTH}${authMethod}`, values)
    .then((res) => {
      switch (authMethod) {
        case SIGN_UP:
          history.push(SIGN_IN);
          break;
        case SIGN_IN:
          localStorage.setItem("token", res.data.token);
          setUser(res.data.token)
          break;
        default:
          console.log(res);
          break;
      }
    })
    .catch((err) => {
      console.log(err);
      console.log(err.response);
    });
};
