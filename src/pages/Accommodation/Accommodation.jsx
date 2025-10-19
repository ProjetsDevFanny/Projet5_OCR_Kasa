/**
 * @file Accommodation.jsx
 * @description Page de détails d'un logement affichant toutes les informations (photos, description, équipements, etc.).
 *              Récupère l'ID depuis l'URL et affiche la page 404 si le logement n'existe pas.
 * @author Simon Fanny
 * @date 16/10/2025
 * @project Kasa - Application de location immobilière - OpenClassrooms
 * 
 * ===============================================================================
 */

import React from 'react'
import { useParams, Navigate } from "react-router-dom";
import './accommodation.scss';
import RatingsStars from '../../components/RatingStars/RatingsStars';
import Collapse from '../../components/Collapse/Collapse';
import Slideshow from '../../components/Slideshow/Slideshow';
import accommodations from '../../assets/accommodations.json';

function Accommodation() {
  const { id } = useParams();
  const accommodation = accommodations.find(accommodation => accommodation.id === id);
  console.log(accommodation);

  if (!accommodation) {
    return <Navigate to="/404" replace />;  // ← Redirection vers la page 404
  }

  // -------------------------------
  // Séparation prénom / nom
  const fullName = accommodation.host.name; // exemple : "Jean Claude Duss"
  const hostNames = fullName.split(' ');   // On coupe la chaîne en mots

  const hostLastName = hostNames.pop();   // On considère que le dernier mot est le nom de famille = "Duss"
  const hostFirstName = hostNames.join(' ');   // Tout le reste est le prénom (on sépare les mots avec un espace) = "Jean Claude"
  // -------------------------------

  return (
    <div className="accommodation">
      <section className="accommodation__slideshow">
        <Slideshow accommodation={accommodation} />
      </section>

      <section className="accommodation__content">
        <div className="accommodation__content-left">
          <div className="accommodation__content-left-title">
            <h1 className="accommodation__title">{accommodation.title}</h1>
            <div className="accommodation__location">
              <span className="accommodation__location-value">{accommodation.location}</span>
            </div>
          </div>
          <div className="accommodation__tags">
            {accommodation.tags.map((tag) => (
              <span key={tag} className="accommodation__tag">{tag}</span>
            ))}
          </div>
        </div>

        <div className="accommodation__content-right">
          <div className="accommodation__host">
            <span className="accommodation__host-name">
              {hostFirstName}<br />{hostLastName}
            </span>
            <img src={accommodation.host.picture} alt={accommodation.host.name} className="accommodation__host-picture" />
          </div>
          <div className="accommodation__rating">
            <RatingsStars rating={accommodation.rating} />
          </div>
        </div>
      </section>

      <section className="accommodation__collapses">
        <Collapse className="accommodation__collapse_description" title="Description" content={accommodation.description} />
        <Collapse className="accommodation__collapse_equipments" title="Équipements" content={accommodation.equipments.map((equipment) => (
          <span key={equipment} className="accommodation__equipment">{equipment}</span>
        ))} />
      </section>

    </div>
  );
}

export default Accommodation;