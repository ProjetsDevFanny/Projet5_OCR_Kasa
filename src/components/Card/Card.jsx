import React from 'react'
import './card.scss'

// Composant qui génère les cards dynamiquement depuis le fichiers JSON des logements fourni
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