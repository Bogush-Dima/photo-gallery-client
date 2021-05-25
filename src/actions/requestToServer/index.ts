import axios from "axios";
import * as H from "history/index";
import {Dispatch, SetStateAction} from "react";
import { AUTH, SERVER, SIGN_IN, SIGN_UP } from "../../constants/paths";
import { FormikValues } from "formik";

export const requestToServer = (
  authMethod: string,
  values: FormikValues | string,
  history: H.History,
  setUser: SetStateAction<any>,
  setIsLoading: Dispatch<SetStateAction<boolean>>
): void => {

  setIsLoading(true)
  axios
    .post(`${SERVER}${AUTH}${authMethod}`, values)
    .then((res) => {
      switch (authMethod) {
        case SIGN_UP:
          history.push(SIGN_IN);
          setIsLoading(false)
          break;
        case SIGN_IN:
          localStorage.setItem("token", res.data.token);
          const { _id, email, gallery } = res.data._doc;
          setIsLoading(false)
          setUser({ id: _id, email, gallery });
          break;
        default:
          console.log(res);
          setIsLoading(false)
          break;
      }
    })
    .catch((err) => {
      console.log(err);
      console.log(err.response);
      setIsLoading(false)
    });
};
