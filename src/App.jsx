/**
 * @file App.jsx
 * @description Composant racine de l'application qui initialise le RouterProvider pour gérer le routage.
 * @author Simon Fanny
 * @date 16/10/2025
 * @project Kasa - Application de location immobilière - OpenClassrooms
 * 
 * ===============================================================================
 */

import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './components/Router'
import './styles/main.scss'
    
function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
