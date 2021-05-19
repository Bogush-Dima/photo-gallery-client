import axios from "axios";
import * as H from "history/index";
import {
  AUTH,
  GALLERY,
  ROOT,
  SERVER,
  SIGN_IN,
  SIGN_UP,
} from "../../App/constants/paths";
import { FormikValues } from "formik";

export const requestToServer = (
  authMethod: string,
  values: FormikValues,
  history: H.History,
  setUser: (arg: string) => string
): void => {
  axios
    .post(`${SERVER}${AUTH}${authMethod}`, values)
    .then((res) => {
      switch (authMethod) {
        case ROOT:
          const token = localStorage.getItem("token");
          if (token) {
            history.push(GALLERY);
          } else {
            history.push(SIGN_IN);
          }
          console.log(token)
          break;
        case SIGN_UP:
          history.push(SIGN_IN);
          break;
        case SIGN_IN:
          localStorage.setItem("token", res.data.token);
          setUser(res.data.token)
          // history.push(GALLERY);
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
