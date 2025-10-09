import React from 'react'
import './accommodation.scss'
import { useParams } from "react-router-dom";
import accommodations from '../../assets/accommodations.json';
import NotFound from '../NotFound/NotFound';

function Accommodation() {
  const { id } = useParams();
  const accommodation = accommodations.find(accommodation => accommodation.id === id);
  console.log(accommodation);
  if (!accommodation) {
    return <NotFound />;  // ← ici on réutilise la page 404
  }

  return (
    <div className="accommodation">
      <h1> {accommodation.title}</h1>
      {/* Tu pourras ensuite afficher les vraies données ici */}
    </div>
  );
}

export default Accommodation;