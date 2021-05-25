import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { useRoutes } from "./hooks/useRoutes";
import { LoaderContext } from "../../../utils/contexts/loader";
import { Loader } from "../Loader";

export const Router = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRoutes();

  return (
    <BrowserRouter>
      <LoaderContext.Provider value={{ isLoading, setIsLoading }}>
        <Loader />
        {router}
      </LoaderContext.Provider>
    </BrowserRouter>
  );
};
