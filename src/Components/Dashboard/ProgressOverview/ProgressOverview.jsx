import React from 'react';

const TimmyAvatar = () => {
  return (
    <div className="animate-bounce-gentle">
      <svg width="120" height="140" viewBox="0 0 120 140" className="drop-shadow-lg">
        {/* Timmy's Body */}
        <ellipse cx="60" cy="105" rx="25" ry="20" fill="#3B82F6"/>
        
        {/* Timmy's Head */}
        <circle cx="60" cy="50" r="30" fill="#FACC15"/>
        
        {/* Hair */}
        <path d="M35 35 Q60 20 85 35 Q75 28 60 30 Q45 28 35 35" fill="#F59E0B"/>
        
        {/* Eyes */}
        <circle cx="50" cy="45" r="5" fill="white"/>
        <circle cx="70" cy="45" r="5" fill="white"/>
        <circle cx="51" cy="45" r="3" fill="#1F2937"/>
        <circle cx="71" cy="45" r="3" fill="#1F2937"/>
        
        {/* Happy Smile */}
        <path d="M45 58 Q60 68 75 58" stroke="#1F2937" strokeWidth="2" fill="none" strokeLinecap="round"/>
        
        {/* Arms */}
        <ellipse cx="40" cy="85" rx="8" ry="15" fill="#FACC15" transform="rotate(-15 40 85)"/>
        <ellipse cx="80" cy="85" rx="8" ry="15" fill="#FACC15" transform="rotate(15 80 85)"/>
        
        {/* Legs */}
        <ellipse cx="50" cy="120" rx="7" ry="12" fill="#FACC15"/>
        <ellipse cx="70" cy="120" rx="7" ry="12" fill="#FACC15"/>
        
        {/* Health Hearts */}
        <path d="M25 25 C25 20, 35 20, 35 25 C35 20, 45 20, 45 25 C45 35, 35 40, 35 40 C35 40, 25 35, 25 25" fill="#EF4444"/>
        <path d="M75 25 C75 20, 85 20, 85 25 C85 20, 95 20, 95 25 C95 35, 85 40, 85 40 C85 40, 75 35, 75 25" fill="#EF4444"/>
      </svg>
    </div>
  );
};

const ProgressOverview = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <div className="flex-1 mb-4 lg:mb-0">
          <h3 className="text-2xl font-bold text-textPrimary mb-2">Tu Progreso General</h3>
          <p className="text-textSecondary mb-4">Has completado 8 de 20 desafíos totales</p>
          <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
            <div 
              className="progress-bar bg-accent h-4 rounded-full" 
              style={{ width: '40%' }}
            />
          </div>
          <span className="text-sm text-textSecondary">40% completado</span>
        </div>
        
        {/* Timmy Avatar */}
        <TimmyAvatar />
      </div>
    </div>
  );
};

export default ProgressOverview;
