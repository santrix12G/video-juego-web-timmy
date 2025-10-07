import React from 'react';

const TopicsGrid = ({ onStartGame }) => {
  const topics = [
    {
      id: 1,
      title: 'Equilibrio Estático',
      completed: 5,
      total: 5,
      status: 'completed',
      buttonText: '✅ Completado',
      buttonClass: 'bg-primary text-white hover:bg-blue-700',
      icon: (
        <svg width="80" height="60" viewBox="0 0 80 60" className="mx-auto">
          <rect x="30" y="25" width="20" height="4" fill="#3B82F6" rx="2"/>
          <circle cx="20" cy="27" r="12" fill="#FACC15"/>
          <circle cx="60" cy="27" r="12" fill="#10B981"/>
          <rect x="38" y="29" width="4" height="25" fill="#6B7280" rx="2"/>
          <rect x="25" y="54" width="30" height="4" fill="#6B7280" rx="2"/>
        </svg>
      ),
      progressColor: 'bg-accent'
    },
    {
      id: 2,
      title: 'Torque',
      completed: 3,
      total: 5,
      status: 'in-progress',
      buttonText: '🎮 Jugar',
      buttonClass: 'bg-primary text-white hover:bg-blue-700',
      icon: (
        <svg width="80" height="60" viewBox="0 0 80 60" className="mx-auto">
          <rect x="10" y="28" width="60" height="4" fill="#3B82F6" rx="2"/>
          <circle cx="25" cy="30" r="8" fill="#FACC15"/>
          <circle cx="55" cy="30" r="12" fill="#EF4444"/>
          <rect x="38" y="15" width="4" height="30" fill="#6B7280" rx="2"/>
          <polygon points="40,10 45,20 35,20" fill="#6B7280"/>
        </svg>
      ),
      progressColor: 'bg-accent'
    },
    {
      id: 3,
      title: 'Centro de Gravedad',
      completed: 0,
      total: 5,
      status: 'locked',
      buttonText: '🔒 Bloqueado',
      buttonClass: 'bg-gray-400 text-white cursor-not-allowed',
      icon: (
        <svg width="80" height="60" viewBox="0 0 80 60" className="mx-auto">
          <rect x="20" y="35" width="40" height="20" fill="#3B82F6" rx="4"/>
          <circle cx="40" cy="25" r="6" fill="#EF4444"/>
          <line x1="40" y1="19" x2="40" y2="35" stroke="#EF4444" strokeWidth="2"/>
          <polygon points="40,15 43,21 37,21" fill="#EF4444"/>
        </svg>
      ),
      progressColor: 'bg-secondary'
    },
    {
      id: 4,
      title: 'Elasticidad',
      completed: 0,
      total: 5,
      status: 'locked',
      buttonText: '🔒 Bloqueado',
      buttonClass: 'bg-gray-400 text-white cursor-not-allowed',
      icon: (
        <svg width="80" height="60" viewBox="0 0 80 60" className="mx-auto">
          <rect x="10" y="10" width="60" height="4" fill="#6B7280"/>
          <path d="M40 14 Q35 25 40 35 Q45 45 40 55" stroke="#10B981" strokeWidth="3" fill="none"/>
          <circle cx="40" cy="55" r="8" fill="#FACC15"/>
        </svg>
      ),
      progressColor: 'bg-secondary'
    }
  ];

  const handleTopicClick = (topic) => {
    switch (topic.status) {
      case 'completed':
        alert(`¡Ya completaste este tema! ✅\n\n¿Quieres repasar los desafíos?`);
        break;
      case 'in-progress':
        if (onStartGame) {
          onStartGame(topic.title);
        } else {
          alert(`¡Iniciando desafío de ${topic.title}! 🎮\n\nEn una aplicación real, aquí se cargaría el juego interactivo.`);
        }
        break;
      case 'locked':
        alert(`🔒 Este tema se desbloqueará cuando completes los anteriores.\n\n¡Sigue progresando con Timmy!`);
        break;
      default:
        break;
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {topics.map((topic) => (
        <div 
          key={topic.id}
          className="card-hover bg-white rounded-2xl shadow-lg p-6 cursor-pointer"
          onClick={() => handleTopicClick(topic)}
        >
          <div className="text-center">
            <div className="mb-4">
              {topic.icon}
            </div>
            <h3 className="text-lg font-bold text-textPrimary mb-2">{topic.title}</h3>
            <div className="mb-4">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className={`progress-bar ${topic.progressColor} h-2 rounded-full`}
                  style={{ width: `${(topic.completed / topic.total) * 100}%` }}
                />
              </div>
              <p className="text-sm text-textSecondary mt-1">
                {topic.completed}/{topic.total} desafíos completados
              </p>
            </div>
            <button className={`w-full py-2 px-4 rounded-lg font-semibold transition-colors ${topic.buttonClass}`}>
              {topic.buttonText}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopicsGrid;
