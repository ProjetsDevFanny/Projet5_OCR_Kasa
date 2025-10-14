import React from 'react';
import './heroBanner.scss';

function HeroBanner({ page }) {
  return (
    <section className={`heroBanner ${page}`}>
      {page === 'home' && <h1>Chez vous, partout et ailleurs</h1>}
    </section>
  );
}

export default HeroBanner;