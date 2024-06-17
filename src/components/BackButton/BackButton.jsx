import React from 'react';
import './BackButton.scss';

function BackButton() {
  const handleBack = () => {
    window.history.back();
  };

  return (
    <button className="back-button" onClick={handleBack}>
      Volver
    </button>
  );
}

export default BackButton;