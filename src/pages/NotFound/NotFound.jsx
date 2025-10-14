import React from 'react'
import './notfound.scss'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function NotFound() {
  const navigate = useNavigate()
  return (
    <div className="notfound">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link onClick={() => navigate('/')}>Retourner sur la page d'accueil</Link>
    </div>
  )
}


export default NotFound;