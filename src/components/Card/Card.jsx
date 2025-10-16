/**
 * @file Card.jsx
 * @description Composant qui affiche une carte de logement avec une image de couverture et un titre.
 *              Utilisé dans la galerie de la page d'accueil pour présenter les logements disponibles.
 * @author Simon Fanny
 * @date 16/10/2025
 * @project Kasa - Application de location immobilière - OpenClassrooms
 * 
 * ===============================================================================
 */

import React from 'react'
import './card.scss'

function Card({title, cover}) {
  return (
    <section className="card">
      <figure>
        <img className="card__img" src={cover} alt={title} />
        <figcaption className="card__title">{title}</figcaption>
      </figure>
    </section>
  )
}

export default Card;