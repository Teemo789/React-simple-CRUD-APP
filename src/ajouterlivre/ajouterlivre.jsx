import React, { useState } from 'react';
import Livre from '../models/livre.js';
import GestionLocalStorage from '../services/GestionLocalStorage';

const AjouterLivre = ({ onLivreAjoute }) => {
  const [titre, setTitre] = useState('');
  const [auteur, setAuteur] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (titre && auteur) {
      const nouveauLivre = new Livre(Date.now(), titre, auteur);
      GestionLocalStorage.ajouterLivre(nouveauLivre);
      setTitre('');
      setAuteur('');
      onLivreAjoute();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Titre du livre"
        value={titre}
        onChange={(e) => setTitre(e.target.value)}
      />
      <input
        type="text"
        placeholder="Auteur du livre"
        value={auteur}
        onChange={(e) => setAuteur(e.target.value)}
      />
      <button type="submit">Ajouter le livre</button>
    </form>
  );
};

export default AjouterLivre;
