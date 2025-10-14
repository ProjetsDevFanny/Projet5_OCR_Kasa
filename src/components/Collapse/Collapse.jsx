// ================================
// COMPONENT COLLAPSE
// Permet d'afficher et de masquer le contenu d'un collapse
// ================================

import React from 'react';
import './collapse.scss';
import arrowBack from '../../assets/arrowBack.png';


import { useState } from 'react';

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false); // état de l'open

  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <button className="collapse" onClick={handleClick}>
      <h2 className="collapse__title">{title}
        <img
          src={arrowBack}
          alt="arrow back"
          className="collapse__title__arrow"
          style={{ transform: `rotate(${isOpen ? -180 : 0}deg)` }} /> {/* rotation de l'image de l'arrow en fonction de l'état de l'open */}
      </h2>
      <div className={`collapse__content ${isOpen ? 'open' : ''}`}> {/* affichage du contenu en fonction de l'état de l'open */}
        {content}</div>
    </button>
  );
}

export default Collapse;  
