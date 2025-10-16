/**
 * @file RatingsStars.jsx
 * @description Composant d'affichage des étoiles de notation d'un logement.
 *              Affiche 5 étoiles dont certaines sont actives selon la note reçue en props.
 * @author Simon Fanny
 * @date 16/10/2025
 * @project Kasa - Application de location immobilière - OpenClassrooms
 * 
 * ===============================================================================
 */

import React from 'react'
import starActive from '../../assets/starActive.png';
import starInactive from '../../assets/starInactive.png';
import './ratingsStars.scss';

function RatingsStars({ rating }) {
  return (
    <div className="rating-stars">
      {[1, 2, 3, 4, 5].map((star) => (
        <img
          key={star}
          src={star <= rating ? starActive : starInactive}
          alt={star <= rating ? "star active" : "star inactive"}
          className="rating-star"
        />
      ))}
    </div>
  );
}

export default RatingsStars;

