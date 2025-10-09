import React from 'react'
import './accommodation.scss'
import { useParams } from "react-router-dom";

function Accommodation() {
  const { id } = useParams();
  return (
    <div>
      <h1>Page du logement {id}</h1>
      {/* Tu pourras ensuite afficher les vraies données ici */}
    </div>
  );
}

export default Accommodation;