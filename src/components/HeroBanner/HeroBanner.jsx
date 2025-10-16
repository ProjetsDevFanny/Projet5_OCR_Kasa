/**
 * @file HeroBanner.jsx
 * @description Composant de bannière hero avec image de fond.
 *              Affiche un titre sur la page d'accueil et une bannière vide sur la page À propos.
 * @author Simon Fanny
 * @date 16/10/2025
 * @project Kasa - Application de location immobilière - OpenClassrooms
 * 
 * ===============================================================================
 */

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