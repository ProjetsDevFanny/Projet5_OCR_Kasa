/**
 * @file NotFound.jsx
 * @description Page d'erreur 404 affichée lorsqu'un utilisateur tente d'accéder à une route inexistante.
 *              Affiche un message d'erreur et un lien de retour vers la page d'accueil.
 * @author Simon Fanny
 * @date 16/10/2025
 * @project Kasa - Application de location immobilière - OpenClassrooms
 * 
 * ===============================================================================
 */

import React from 'react'
import './notfound.scss'
import { Link } from 'react-router-dom'

function NotFound() {
   return (
    <div className="notfound">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/">Retourner sur la page d'accueil</Link>
    </div>
  )
}

export default NotFound;