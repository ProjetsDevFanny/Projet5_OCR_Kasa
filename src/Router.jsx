import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import NotFound from "./pages/NotFound/NotFound";
import Layout from "./components/Layout/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Layout englobe toutes les routes enfants
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "*", // ← le * capture toutes les routes non définies
        element: <NotFound />, // ← affichera toujours la page 404
      },
    ],
  },
]);
  



