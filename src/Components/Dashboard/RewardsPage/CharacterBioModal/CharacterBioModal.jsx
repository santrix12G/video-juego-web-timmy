import React, { useEffect } from 'react';

const CharacterBioModal = ({ character, onClose }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-60 modal-backdrop z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="modal-content bg-white rounded-3xl shadow-2xl max-w-lg w-full p-8">
        <div className="text-center">
          <div className="w-24 h-24 mx-auto mb-6 bg-primary bg-opacity-10 rounded-full flex items-center justify-center">
            {character.icon}
          </div>
          
          <h2 className="text-2xl font-bold text-textPrimary mb-4">
            {character.name}
          </h2>
          
          <div 
            className="text-left space-y-4 text-textSecondary leading-relaxed"
            dangerouslySetInnerHTML={{ __html: character.biography }}
          />
          
          <button 
            onClick={onClose}
            className="mt-6 bg-primary hover:bg-blue-700 text-white py-2 px-6 rounded-lg font-semibold transition-colors"
          >
            ¡Genial!
          </button>
        </div>
      </div>
    </div>
  );
};

export default CharacterBioModal;
