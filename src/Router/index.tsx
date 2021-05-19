import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { useRoutes } from "./hooks/useRoutes";

export const Router = () => {
  const [user, setUser] = useState(localStorage.getItem("token"));
  const router = useRoutes(user, setUser);

  return <BrowserRouter>{router}</BrowserRouter>;
};
