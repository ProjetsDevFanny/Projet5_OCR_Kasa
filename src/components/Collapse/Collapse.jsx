/**
 * @file Collapse.jsx
 * @description Composant d'accordéon réutilisable permettant d'afficher/masquer du contenu.
 *              Utilisé sur les pages À propos et Fiche logement pour afficher les informations.
 * @author Simon Fanny
 * @date 16/10/2025
 * @project Kasa - Application de location immobilière - OpenClassrooms
 * 
 * ===============================================================================
 */

import React, { useState } from 'react';
import './collapse.scss';
import arrowBack from '../../assets/arrowBack.png';

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <button className="collapse__title" onClick={handleClick}>
        <h2>{title}</h2>
        <img
          src={arrowBack}
          alt="arrow back"
          className="collapse__title__arrow"
          style={{ transform: `rotate(${isOpen ? -180 : 0}deg)` }}
        />
      </button>

      <div className={`collapse__content ${isOpen ? 'open' : ''}`}>
        {content}
      </div>
    </div>
  );
}

export default Collapse; 
