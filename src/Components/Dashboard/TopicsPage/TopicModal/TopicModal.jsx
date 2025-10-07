import React, { useEffect } from 'react';

const TopicModal = ({ topic, onClose, onStartTheory, onStartPractice }) => {
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

  const getModalIcon = () => {
    switch (topic.id) {
      case 'equilibrio':
        return (
          <svg className="w-12 h-12 text-primary" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        );
      case 'torque':
        return (
          <svg className="w-12 h-12 text-primary" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path>
          </svg>
        );
      case 'gravedad':
        return (
          <svg className="w-12 h-12 text-primary" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
        );
      case 'elasticidad':
        return (
          <svg className="w-12 h-12 text-primary" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"></path>
          </svg>
        );
      default:
        return (
          <svg className="w-12 h-12 text-primary" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        );
    }
  };

  const getModalDescription = () => {
    switch (topic.id) {
      case 'equilibrio':
        return '¿Cómo quieres aprender sobre fuerzas balanceadas?';
      case 'torque':
        return '¿Cómo quieres explorar las fuerzas de rotación?';
      case 'gravedad':
        return 'Este tema se desbloqueará pronto';
      case 'elasticidad':
        return 'Este tema se desbloqueará pronto';
      default:
        return '¿Cómo quieres aprender sobre este tema?';
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-60 modal-backdrop z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="modal-content bg-white rounded-3xl shadow-2xl max-w-md w-full p-8">
        <div className="text-center">
          <div className="mb-6">
            <div className="w-20 h-20 mx-auto mb-4 bg-primary bg-opacity-10 rounded-full flex items-center justify-center">
              {getModalIcon()}
            </div>
            <h2 className="text-2xl font-bold text-textPrimary mb-2">{topic.title}</h2>
            <p className="text-textSecondary">{getModalDescription()}</p>
          </div>
          
          <div className="space-y-4">
            {/* Theory Button */}
            <button 
              onClick={onStartTheory}
              className="w-full bg-primary hover:bg-blue-700 text-white py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-3"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span>📖 Aprender Teoría</span>
            </button>
            
            {/* Practice Button */}
            <button 
              onClick={onStartPractice}
              className="w-full bg-secondary hover:bg-yellow-500 text-textPrimary py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-3"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path>
              </svg>
              <span>🎮 Practicar con Escenarios</span>
            </button>
          </div>
          
          <button 
            onClick={onClose}
            className="mt-6 text-textSecondary hover:text-textPrimary transition-colors"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopicModal;
