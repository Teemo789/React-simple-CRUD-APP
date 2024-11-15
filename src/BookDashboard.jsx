import React, { useState, useEffect } from 'react';
import GestionLocalStorage from './services/GestionLocalStorage';
import AjouterLivre from './ajouterlivre/ajouterlivre';
import SupprimerLivre from './supprimerlivre/supprimerlivre';
import ModifierLivre from './modifierlivre/modifierlivre';
import './BookDashboard.css';

const BookDashboard = () => {
  const [livres, setLivres] = useState([]);
  const [livreEnEdition, setLivreEnEdition] = useState(null);
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    chargerLivres();
  }, []);

  const chargerLivres = () => {
    const livresCharges = GestionLocalStorage.getLivres();
    setLivres(livresCharges);
  };

  const afficherNotification = (message, type) => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  return (
    <div className="dashboard-container">
      {notification && (
        <div className={`notification ${notification.type}`}>
          {notification.message}
        </div>
      )}
      <aside className="sidebar">
        <h1>Book Dashboard</h1>
        <button>Manage Books</button>
      </aside>
      <main className="main-content">
        <h2>Manage Books</h2>
        <div className="card">
          <h3>Add New Book</h3>
          <AjouterLivre
            onLivreAjoute={() => {
              chargerLivres();
              afficherNotification('Livre ajouté avec succès!', 'success');
            }}
          />
        </div>

        {livres.map((livre) => (
          <div key={livre.id} className="card">
            <h3>{livre.titre}</h3>
            <p>Author: {livre.auteur}</p>
            <button onClick={() => setLivreEnEdition(livre)}>Edit</button>
            <SupprimerLivre
              id={livre.id}
              onLivreSupprime={() => {
                chargerLivres();
                afficherNotification('Livre supprimé avec succès!', 'error');
              }}
            />
          </div>
        ))}

        {livreEnEdition && (
          <div className="modal">
            <div className="modal-content">
              <h3>Edit Book</h3>
              <ModifierLivre
                livre={livreEnEdition}
                onLivreModifie={() => {
                  chargerLivres();
                  afficherNotification('Livre modifié avec succès!', 'success');
                  setLivreEnEdition(null);
                }}
              />
              <button onClick={() => setLivreEnEdition(null)}>Cancel</button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default BookDashboard;
