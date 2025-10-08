import React from 'react'
import './home.scss'
import HeroBannerHome from '../../components/HeroBannerHome/HeroBannerHome'
import Card from '../../components/Card/Card'

function Home() {
  return (
    <div className="home">
      <HeroBannerHome />
      <div className="home__gallery">
        <Card />
      </div>
    </div>
  )
}

export default Home;