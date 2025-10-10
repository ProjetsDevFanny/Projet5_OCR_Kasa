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

