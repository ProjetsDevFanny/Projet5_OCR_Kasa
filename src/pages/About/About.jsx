/**
 * @file About.jsx
 * @description Page À propos présentant les valeurs et engagements de Kasa.
 *              Affiche une bannière hero et une liste de collapses avec les informations de l'entreprise.
 * @author Simon Fanny
 * @date 16/10/2025
 * @project Kasa - Application de location immobilière - OpenClassrooms
 * 
 * ===============================================================================
 */

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