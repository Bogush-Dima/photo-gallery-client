import axios from "axios";
import { AUTH, GALLERY, SERVER, SIGN_IN } from "../../App/constants/paths";
import * as H from "history/index";
import { FormikValues } from "formik";

export const requestToServer = (
  authMethod: string,
  values: FormikValues,
  history: H.History
): void => {
  axios
    .post(`${SERVER}${AUTH}${authMethod}`, values)
    .then((res) => {
      if (authMethod === SIGN_IN) {
        localStorage.setItem("token", res.data.token);
      }
      console.log(res);
      history.push(GALLERY);
    })
    .catch((err) => {
      console.log(err);
      console.log(err.response);
    });
};
