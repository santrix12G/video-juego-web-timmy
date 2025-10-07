import React from 'react';

const AvatarSelector = ({ selectedAvatar, onAvatarChange }) => {
  const avatars = [
    {
      id: 'timmy',
      name: 'Timmy Original',
      description: 'El protagonista clásico',
      owned: true,
      icon: (
        <svg width="50" height="60" viewBox="0 0 50 60" className="mr-4">
          <circle cx="25" cy="20" r="15" fill="#FACC15"/>
          <rect x="15" y="35" width="20" height="25" fill="#3B82F6" rx="4"/>
          <circle cx="20" cy="17" r="2" fill="#1F2937"/>
          <circle cx="30" cy="17" r="2" fill="#1F2937"/>
          <path d="M18 25 Q25 30 32 25" stroke="#1F2937" strokeWidth="2" fill="none"/>
        </svg>
      )
    },
    {
      id: 'curie',
      name: 'Marie Curie',
      description: '✓ Desbloqueado',
      owned: true,
      icon: (
        <svg width="50" height="60" viewBox="0 0 50 60" className="mr-4">
          <circle cx="25" cy="20" r="15" fill="#F3E8FF"/>
          <path d="M12 15 Q25 10 38 15 Q35 25 25 20 Q15 25 12 15" fill="#8B5CF6"/>
          <rect x="15" y="35" width="20" height="25" fill="#1F2937" rx="4"/>
          <circle cx="20" cy="17" r="2" fill="#1F2937"/>
          <circle cx="30" cy="17" r="2" fill="#1F2937"/>
        </svg>
      )
    },
    {
      id: 'newton',
      name: 'Isaac Newton',
      description: '🔒 100 monedas',
      owned: false,
      locked: true,
      icon: (
        <svg width="50" height="60" viewBox="0 0 50 60" className="mr-4">
          <circle cx="25" cy="20" r="15" fill="#F3E8FF"/>
          <path d="M10 12 Q25 7 40 12 Q37 22 25 17 Q13 22 10 12" fill="#E5E7EB"/>
          <rect x="15" y="35" width="20" height="25" fill="#6B7280" rx="4"/>
          <circle cx="20" cy="17" r="2" fill="#1F2937"/>
          <circle cx="30" cy="17" r="2" fill="#1F2937"/>
        </svg>
      )
    },
    {
      id: 'einstein',
      name: 'Albert Einstein',
      description: '🔒 150 monedas',
      owned: false,
      locked: true,
      icon: (
        <svg width="50" height="60" viewBox="0 0 50 60" className="mr-4">
          <circle cx="25" cy="20" r="15" fill="#F3E8FF"/>
          <path d="M8 12 Q15 7 25 10 Q35 7 42 12 Q40 22 25 17 Q10 22 8 12" fill="#E5E7EB"/>
          <rect x="15" y="35" width="20" height="25" fill="#6B7280" rx="4"/>
          <ellipse cx="25" cy="25" rx="6" ry="1.5" fill="#E5E7EB"/>
          <circle cx="20" cy="17" r="2" fill="#1F2937"/>
          <circle cx="30" cy="17" r="2" fill="#1F2937"/>
        </svg>
      )
    }
  ];

  const handleAvatarClick = (avatar) => {
    if (avatar.locked) {
      alert(`🔒 Este avatar se desbloqueará cuando tengas suficientes monedas.\n\nNecesitas completar más desafíos para ganar monedas y desbloquear a ${avatar.name}.`);
      return;
    }
    onAvatarChange(avatar.id);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <div className="flex items-center mb-6">
        <svg className="w-8 h-8 text-primary mr-3" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd"></path>
        </svg>
        <h2 className="text-xl font-bold text-textPrimary">Seleccionar Avatar</h2>
      </div>
      
      <div className="space-y-4">
        {avatars.map((avatar) => (
          <div 
            key={avatar.id}
            onClick={() => handleAvatarClick(avatar)}
            className={`avatar-selector p-4 rounded-xl cursor-pointer transition-all duration-300 ${
              selectedAvatar === avatar.id ? 'avatar-selected' : ''
            } ${
              avatar.locked ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'
            }`}
          >
            <div className="flex items-center">
              {avatar.icon}
              <div>
                <div className={`font-bold ${avatar.locked ? 'text-textSecondary' : 'text-textPrimary'}`}>
                  {avatar.name}
                </div>
                <div className={`text-sm ${
                  avatar.owned ? 'text-accent' : 
                  avatar.locked ? 'text-error' : 'text-textSecondary'
                }`}>
                  {avatar.description}
                </div>
              </div>
              <div className="ml-auto">
                {avatar.locked ? (
                  <svg className="w-4 h-4 text-error" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"></path>
                  </svg>
                ) : selectedAvatar === avatar.id ? (
                  <div className="w-4 h-4 bg-primary rounded-full"></div>
                ) : (
                  <div className="w-4 h-4 border-2 border-gray-300 rounded-full"></div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvatarSelector;
