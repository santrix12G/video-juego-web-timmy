import React, { useState, useEffect } from 'react';

const ProfilePictureModal = ({ selectedProfile, onProfileChange, onClose }) => {
  const [tempSelectedProfile, setTempSelectedProfile] = useState(selectedProfile);

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

  const profileOptions = [
    { id: 'A', color: 'bg-primary', name: 'Azul' },
    { id: 'B', color: 'bg-accent', name: 'Verde' },
    { id: 'C', color: 'bg-secondary', name: 'Amarillo' },
    { id: 'D', color: 'bg-error', name: 'Rojo' },
    { id: 'E', color: 'bg-purple-500', name: 'Morado' },
    { id: 'F', color: 'bg-pink-500', name: 'Rosa' }
  ];

  const handleConfirm = () => {
    onProfileChange(tempSelectedProfile);
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-60 modal-backdrop z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="modal-content bg-white rounded-3xl shadow-2xl max-w-md w-full p-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-textPrimary mb-6">Cambiar Foto de Perfil</h2>
          
          <div className="grid grid-cols-3 gap-4 mb-6">
            {profileOptions.map((option) => (
              <div 
                key={option.id}
                onClick={() => setTempSelectedProfile(option.id)}
                className={`profile-option cursor-pointer p-4 rounded-xl hover:bg-gray-100 transition-all duration-300 ${
                  tempSelectedProfile === option.id ? 'ring-4 ring-primary bg-primary bg-opacity-10' : ''
                }`}
              >
                <div className={`w-16 h-16 ${option.color} rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto shadow-lg`}>
                  {option.id}
                </div>
                <div className="mt-2 text-xs text-textSecondary">{option.name}</div>
              </div>
            ))}
          </div>
          
          <div className="flex space-x-4">
            <button 
              onClick={onClose}
              className="flex-1 bg-gray-300 hover:bg-gray-400 text-textPrimary py-2 px-4 rounded-lg font-semibold transition-colors"
            >
              Cancelar
            </button>
            <button 
              onClick={handleConfirm}
              className="flex-1 bg-primary hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors"
            >
              Confirmar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePictureModal;
