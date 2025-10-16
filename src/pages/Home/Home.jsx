/**
 * @file Home.jsx
 * @description Page d'accueil de l'application affichant la bannière hero et la galerie de logements.
 *              Charge les données depuis le fichier JSON et affiche chaque logement sous forme de carte cliquable.
 * @author Simon Fanny
 * @date 16/10/2025
 * @project Kasa - Application de location immobilière - OpenClassrooms
 * 
 * ===============================================================================
 */

import React from 'react'
import './home.scss'
import HeroBanner from '../../components/HeroBanner/HeroBanner';
import Card from '../../components/Card/Card'
import accommodations from '../../assets/accommodations.json';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <HeroBanner page="home" />
      <div className="home__gallery">
        {accommodations.map((accommodation) => (
          <Link key={accommodation.id} to={`/accommodation/${accommodation.id}`}>
            <Card
            id={accommodation.id}
            title={accommodation.title}
            cover={accommodation.cover}
          />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Home;