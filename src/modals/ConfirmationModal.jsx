import React from 'react';
import './ConfirmationModal.css';

const ConfirmationModal = ({ message, onConfirm, onCancel }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <p className="modal-message">{message}</p>
        <div className="modal-buttons">
          <button className="confirm-button" onClick={onConfirm}>
            Oui
          </button>
          <button className="cancel-button" onClick={onCancel}>
            Annuler
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
