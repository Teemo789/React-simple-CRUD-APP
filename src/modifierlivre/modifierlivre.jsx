import React, { useState } from 'react';
import GestionLocalStorage from '../services/GestionLocalStorage';

const ModifierLivre = ({ livre, onLivreModifie }) => {
  const [titre, setTitre] = useState(livre.titre);
  const [auteur, setAuteur] = useState(livre.auteur);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (titre && auteur) {
      const livreModifie = { ...livre, titre, auteur };
      GestionLocalStorage.modifierLivre(livreModifie);
      onLivreModifie();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={titre}
        onChange={(e) => setTitre(e.target.value)}
      />
      <input
        type="text"
        value={auteur}
        onChange={(e) => setAuteur(e.target.value)}
      />
      <button type="submit">Enregistrer les modifications</button>
    </form>
  );
};

export default ModifierLivre;
