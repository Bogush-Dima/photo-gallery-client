import axios from "axios";
import { SERVER, AUTH, ROOT, GALLERY } from "../../App/constants/paths";

export const requestWithToken = () => {
  const token = localStorage.getItem("token");

  if (token) {
    axios
      .post(`${SERVER}${AUTH}${ROOT}`, token)
      .then(() => {
        window.location.pathname = GALLERY;
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return
};
