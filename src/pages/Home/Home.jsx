import React from 'react'
import './home.scss'
import HeroBannerHome from '../../components/HeroBannerHome/HeroBannerHome'
import Card from '../../components/Card/Card'
import accommodations from '../../assets/accommodations.json';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <HeroBannerHome />
      <div className="home__gallery">
        {accommodations.map((accommodation) => (
          <Link to={`/accommodation/${accommodation.id}`}>
            <Card
            key={accommodation.id}
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