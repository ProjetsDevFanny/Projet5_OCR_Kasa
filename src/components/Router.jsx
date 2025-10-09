import React from "react";
import { createBrowserRouter } from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import Home from '../pages/Home/Home'
import About from '../pages/About/About'
import NotFound from '../pages/NotFound/NotFound'
import Accommodation from '../pages/Accommodation/Accommodation'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />, // pour les erreurs internes de React Router
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'accommodation/:id', element: <Accommodation /> },
      { path: '*', element: <NotFound /> } // pour les URL inexistantes -> '*'catch-all
    ],
  },
])
