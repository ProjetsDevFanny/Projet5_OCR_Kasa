import React from 'react'
import './home.scss'
import HeroBannerHome from '../../components/HeroBannerHome/HeroBannerHome'
import Card from '../../components/Card/Card'
import logements from '../../assets/logements.json';

function Home() {
  return (
    <div className="home">
      <HeroBannerHome />
      <div className="home__gallery">
        {logements.map((logement) => (
          <Card
            key={logement.id}
            id={logement.id}
            title={logement.title}
            cover={logement.cover}
          />
        ))}
      </div>
    </div>
  )
}

export default Home;