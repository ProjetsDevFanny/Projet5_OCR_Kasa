import React from 'react';
import './collapse.scss';
import arrowBack from '../../assets/arrowBack.png';

function Collapse({ title, content }) {
  return (
    <div className="collapse">
      <h2 className="collapse__title">{title}<img src={arrowBack} alt="arrow back" className="collapse__title-arrow" /></h2>
      <p className="collapse__content">{content}</p>
    </div>
  );
}

export default Collapse;