import React from 'react'
import { useParams } from "react-router-dom";
import accommodations from '../../assets/accommodations.json';
import NotFound from '../NotFound/NotFound';
import './accommodation.scss';
import arrowLeft from '../../assets/arrowLeft.png';
import arrowRight from '../../assets/arrowRight.png';
import starActive from '../../assets/starActive.png';
import starInactive from '../../assets/starInactive.png';

function Accommodation() {
  const { id } = useParams();
  const accommodation = accommodations.find(accommodation => accommodation.id === id);
  console.log(accommodation);

  if (!accommodation) {
    return <NotFound />;  // ← page 404 affichée
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

      <section className="accommodation__carroussel">
        <img src={accommodation.cover} alt={accommodation.title} className="accommodation__cover" />
        <div className="accommodation__carroussel-buttons">
          <button className="accommodation__carroussel-button-left">
            <img src={arrowLeft} alt="arrow left" />
          </button>
          <button className="accommodation__carroussel-button-right">
            <img src={arrowRight} alt="arrow right" />
          </button>
        </div>
        <div className="accommodation__carroussel-counter">
          <span>{accommodation.pictures.length}</span>
          <span>/</span>
          <span>{accommodation.pictures.length}</span>
        </div>
      </section>

      <section className="accommodation__content">
        <div className="accommodation__content-left">
          <div className="accommodation__content-left-title">
            <h1 className="accommodation__title"> {accommodation.title}</h1>
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
            <span className="accommodation__rating-value">{accommodation.rating}</span>
          </div>
        </div>
      </section>




    </div>
  );
}

export default Accommodation;