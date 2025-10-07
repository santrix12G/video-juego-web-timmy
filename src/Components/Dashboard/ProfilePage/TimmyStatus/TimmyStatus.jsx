import React from 'react';

const TimmyStatus = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <div className="flex items-center mb-6">
        <svg className="w-8 h-8 text-primary mr-3" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path>
        </svg>
        <h2 className="text-xl font-bold text-textPrimary">Estado de Timmy</h2>
      </div>
      
      <div className="text-center">
        <div className="animate-timmy-bounce mb-4">
          <svg width="120" height="140" viewBox="0 0 120 140" className="mx-auto">
            {/* Healthy Timmy */}
            <circle cx="60" cy="40" r="25" fill="#FACC15"/>
            <rect x="40" y="65" width="40" height="50" fill="#3B82F6" rx="8"/>
            <rect x="35" y="115" width="15" height="20" fill="#1F2937" rx="4"/>
            <rect x="70" y="115" width="15" height="20" fill="#1F2937" rx="4"/>
            {/* Arms */}
            <rect x="25" y="70" width="15" height="30" fill="#FACC15" rx="8"/>
            <rect x="80" y="70" width="15" height="30" fill="#FACC15" rx="8"/>
            {/* Happy face */}
            <circle cx="52" cy="35" r="3" fill="#1F2937"/>
            <circle cx="68" cy="35" r="3" fill="#1F2937"/>
            <path d="M48 48 Q60 58 72 48" stroke="#1F2937" strokeWidth="3" fill="none"/>
            {/* Health hearts */}
            <g fill="#EF4444">
              <path d="M15 25 Q15 20 20 20 Q25 20 25 25 Q25 30 20 35 Q15 30 15 25"/>
              <path d="M95 25 Q95 20 100 20 Q105 20 105 25 Q105 30 100 35 Q95 30 95 25"/>
            </g>
          </svg>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-textSecondary">Salud:</span>
            <div className="flex space-x-1">
              <span className="text-error text-xl">❤️❤️❤️</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-textSecondary">Estado:</span>
            <span className="text-accent font-bold">¡Excelente!</span>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-textSecondary">Energía:</span>
            <div className="w-20 bg-gray-200 rounded-full h-3">
              <div className="bg-accent h-3 rounded-full" style={{ width: '100%' }}></div>
            </div>
          </div>
        </div>
        
        <div className="mt-4 p-3 bg-accent bg-opacity-10 rounded-lg">
          <p className="text-sm text-textPrimary">
            <strong>¡Timmy está en perfectas condiciones!</strong><br/>
            Sigue resolviendo desafíos para mantenerlo feliz y saludable.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TimmyStatus;
