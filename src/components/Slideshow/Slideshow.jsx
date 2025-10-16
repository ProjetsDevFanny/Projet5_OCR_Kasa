/**
 * @file Slideshow.jsx
 * @description Composant de diaporama permettant de naviguer entre les photos d'un logement.
 *              Affiche des flèches de navigation et un compteur si plusieurs images sont disponibles.
 * @author Simon Fanny
 * @date 16/10/2025
 * @project Kasa - Application de location immobilière - OpenClassrooms
 * 
 * ===============================================================================
 */

import React from 'react'
import './slideshow.scss'
import arrowLeft from '../../assets/arrowLeft.png';
import arrowRight from '../../assets/arrowRight.png';
import { useState } from 'react';

function Slideshow({ accommodation }) {
  const [currentIndex, setCurrentIndex] = useState(0); // pour l'index de l'image en cours
  const [fade, setFade] = useState(false); // pour le fondu

  const handleArrowLeft = () => {
    setFade(true); // déclenche le fondu
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        (prevIndex - 1 + accommodation.pictures.length) % accommodation.pictures.length
      );
      setFade(false); // remet l'opacité à 1 après le changement
    }, 400); // doit correspondre à la durée CSS du fondu
  };

  const handleArrowRight = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        (prevIndex + 1) % accommodation.pictures.length
      );
      setFade(false);
    }, 400);
  };

  return (
    <div className="slideshow">
      <img
        src={accommodation.pictures[currentIndex]}
        alt={accommodation.title}
        className={`slideshow__picture ${fade ? 'fade' : ''}`}
      />
      {accommodation.pictures.length > 1 && (
        <div className="slideshow__arrows">
          <button className="slideshow__arrow-left" onClick={handleArrowLeft}>
            <img src={arrowLeft} alt="arrow left" />
          </button>
          <button className="slideshow__arrow-right" onClick={handleArrowRight}>
            <img src={arrowRight} alt="arrow right" />
          </button>
        </div>
      )}
      {accommodation.pictures.length > 1 && (
        <div className="slideshow__counter">
          <span>{currentIndex + 1}</span>
          <span>/</span>
          <span>{accommodation.pictures.length}</span>
        </div>
      )}
    </div>
  )
}

export default Slideshow;








