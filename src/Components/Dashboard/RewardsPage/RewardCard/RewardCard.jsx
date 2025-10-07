import React from 'react';

const RewardCard = ({ item, owned, coins, onPurchase }) => {
  const canAfford = coins >= item.price;
  const isLocked = item.locked;
  const isOwned = owned || item.owned;

  const getCardClasses = () => {
    let classes = 'reward-card card-hover bg-white rounded-2xl shadow-lg p-6 relative';
    
    if (isOwned) {
      classes += ' unlocked-border';
    } else if (isLocked) {
      classes += ' locked-card';
    }
    
    return classes;
  };

  const getStatusBadge = () => {
    if (isOwned) {
      return (
        <div className="absolute top-3 right-3">
          <div className="bg-accent text-white px-2 py-1 rounded-full text-xs font-bold">
            ✓ DESBLOQUEADO
          </div>
        </div>
      );
    } else if (isLocked) {
      return (
        <div className="absolute top-3 right-3">
          <div className="bg-error text-white p-2 rounded-full">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"></path>
            </svg>
          </div>
        </div>
      );
    }
    return null;
  };

  const getPriceDisplay = () => {
    if (isOwned) {
      return (
        <div className="flex items-center justify-center mb-4">
          <span className="font-bold text-lg text-accent">¡GRATIS!</span>
        </div>
      );
    } else {
      return (
        <div className="flex items-center justify-center mb-4">
          <svg className="w-5 h-5 text-secondary mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path>
          </svg>
          <span className="font-bold text-lg">{item.price}</span>
        </div>
      );
    }
  };

  const getButton = () => {
    if (isOwned) {
      return (
        <button className="w-full bg-accent text-white py-2 px-4 rounded-lg font-semibold cursor-default">
          ✓ En tu colección
        </button>
      );
    } else if (isLocked) {
      return (
        <button className="w-full bg-gray-400 text-white py-2 px-4 rounded-lg font-semibold cursor-not-allowed">
          🔒 Completa más desafíos
        </button>
      );
    } else if (!canAfford) {
      return (
        <button 
          onClick={onPurchase}
          className="w-full bg-gray-400 text-white py-2 px-4 rounded-lg font-semibold cursor-not-allowed"
        >
          💰 Insuficientes monedas
        </button>
      );
    } else {
      return (
        <button 
          onClick={onPurchase}
          className="purchase-btn w-full bg-primary hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors"
        >
          {item.type === 'character' ? 'Desbloquear' : 'Comprar'}
        </button>
      );
    }
  };

  return (
    <div className={getCardClasses()}>
      {getStatusBadge()}
      
      <div className="text-center">
        <div className="mb-4 relative">
          {item.icon}
        </div>
        
        <h3 className="text-lg font-bold text-textPrimary mb-2">
          {item.name || item.title}
        </h3>
        
        <p className="text-textSecondary text-sm mb-4">
          {item.description}
        </p>
        
        {getPriceDisplay()}
        
        {getButton()}
      </div>
    </div>
  );
};

export default RewardCard;
