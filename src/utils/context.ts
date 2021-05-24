import React from "react";
import { UserContextValues } from "./types";

const initialValues: UserContextValues = {
  user: {
    id: "",
    email: "",
    gallery: [
      {
        img: [],
        _id: "",
      },
    ],
  },
  setUser: {},
};

export const UserContext = React.createContext(initialValues);
