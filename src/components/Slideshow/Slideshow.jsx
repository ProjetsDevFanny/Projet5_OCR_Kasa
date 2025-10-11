import React from 'react'
import './slideshow.scss'
import arrowLeft from '../../assets/arrowLeft.png';
import arrowRight from '../../assets/arrowRight.png';
  

function Slideshow({ accommodation }) {
  return (
    <div className="slideshow">
      <img src={accommodation.cover} alt={accommodation.title} className="accommodation__cover" />
      <div className="accommodation__carroussel-arrows">
        <div className="accommodation__carroussel-arrow-left">
          <img src={arrowLeft} alt="arrow left" />
        </div>
        <div className="accommodation__carroussel-arrow-right">
          <img src={arrowRight} alt="arrow right" />
        </div>
      </div>
      <div className="accommodation__carroussel-counter">
        <span>{accommodation.pictures.length}</span>
        <span>/</span>
        <span>{accommodation.pictures.length}</span>
      </div>
    </div>
  )
}

export default Slideshow;








