import axios from "axios";
import { AUTH, ROOT, SERVER, SIGN_IN } from "../App/constants/paths";

export const requestToServer = (authMethod: string, values: any) => {
  return axios
    .post(`${SERVER}${AUTH}${authMethod}`, values)
    .then((res) => {
      if (authMethod === SIGN_IN) {
        localStorage.setItem("token", res.data.token);
      }
      if (authMethod === ROOT) {
      }
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
      console.log(err.response);
      // return err
    });
};
