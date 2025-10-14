import React from 'react'
import './about.scss'
import HeroBanner from '../../components/HeroBanner/HeroBanner';
import Collapse from '../../components/Collapse/Collapse'
import about from '../../assets/about.json'

function About() {
  return (
    <div className="about">
      <HeroBanner page="about" />
      <section className="about__collapses">
        {about.map((collapse) => (
          <Collapse key={collapse.id} title={collapse.title} content={collapse.content} />
        ))}
      </section>
    </div>
  )
}

export default About;