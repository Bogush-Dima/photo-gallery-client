import React from "react";
import { BrowserRouter } from "react-router-dom";
import { useRoutes } from "./hooks/useRoutes";

export const Router = () => {
  const router = useRoutes();

  return (
    <BrowserRouter>
        {router}
    </BrowserRouter>
  );
};
