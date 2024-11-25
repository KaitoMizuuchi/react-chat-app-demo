import React from "react";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import { Navigate, useRoutes } from "react-router-dom";

const Router = () => {
  const routingConfig = [
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    { path: "/", element: <Navigate to="/login" /> },
  ];

  const routing = useRoutes(routingConfig);
  return routing;
};

export default Router;
