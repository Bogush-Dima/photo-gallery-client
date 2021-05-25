import React from "react";
import { LoaderContextValues } from "./types";

const initialValues: LoaderContextValues = {
  isLoading: false,
  setIsLoading: (prevState) => !prevState,
};

export const LoaderContext = React.createContext(initialValues);
