import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { useRoutes } from "./hooks/useRoutes";

export const Router = () => {
  const [user, setUser] = useState(null);
  const router = useRoutes(user, setUser);

  return <BrowserRouter>{router}</BrowserRouter>;
};
