import React, { useState } from 'react';
import GestionLocalStorage from '../services/GestionLocalStorage';
import ConfirmationModal from '../modals/ConfirmationModal';

const SupprimerLivre = ({ id, onLivreSupprime }) => {
  const [showModal, setShowModal] = useState(false);

  const handleSupprimer = () => {
    GestionLocalStorage.supprimerLivre(id);
    onLivreSupprime();
    setShowModal(false);
  };

  return (
    <>
      <button onClick={() => setShowModal(true)}>Supprimer</button>
      {showModal && (
        <ConfirmationModal
          message="Voulez-vous vraiment supprimer ce livre ?"
          onConfirm={handleSupprimer}
          onCancel={() => setShowModal(false)}
        />
      )}
    </>
  );
};

export default SupprimerLivre;
