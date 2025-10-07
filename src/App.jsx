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
