import React, { useState, useEffect } from 'react';
import ProfilePictureModal from './ProfilePictureModal/ProfilePictureModal';
import TimmyStatus from './TimmyStatus/TimmyStatus';
import AvatarSelector from './AvatarSelector/AvatarSelector';
import './ProfilePage.css';

const ProfilePage = ({ onBackToDashboard }) => {
  const [selectedProfile, setSelectedProfile] = useState('A');
  const [selectedAvatar, setSelectedAvatar] = useState('timmy');
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [userData, setUserData] = useState({
    nickname: 'Alejandro',
    email: 'alejandro@ejemplo.com',
    registrationDate: '15 de Marzo, 2024',
    coins: 1250,
    achievements: 12,
    playTime: '24h 30m'
  });

  const learningProgress = [
    {
      topic: 'Equilibrio Estático',
      percentage: 100,
      completed: 5,
      total: 5,
      locked: false,
      stars: 3
    },
    {
      topic: 'Torque',
      percentage: 60,
      completed: 3,
      total: 5,
      locked: false,
      stars: 2
    },
    {
      topic: 'Centro de Gravedad',
      percentage: 0,
      completed: 0,
      total: 5,
      locked: true,
      stars: 0
    },
    {
      topic: 'Elasticidad',
      percentage: 0,
      completed: 0,
      total: 5,
      locked: true,
      stars: 0
    }
  ];

  const recentAchievements = [
    {
      id: 1,
      title: 'Maestro del Equilibrio',
      description: 'Completaste todos los desafíos de equilibrio',
      icon: '🏆',
      color: 'accent'
    },
    {
      id: 2,
      title: 'Coleccionista',
      description: 'Acumulaste 1,000 monedas',
      icon: '💰',
      color: 'secondary'
    },
    {
      id: 3,
      title: 'Conocedor de la Historia',
      description: 'Desbloqueaste tu primer científico',
      icon: '🧑‍🔬',
      color: 'primary'
    },
    {
      id: 4,
      title: 'Velocidad de Rayo',
      description: 'Resolviste 5 desafíos en menos de 10 minutos',
      icon: '⚡',
      color: 'error'
    }
  ];

  const handleProfileChange = () => {
    setShowProfileModal(true);
  };

  const handleAvatarChange = (avatarId) => {
    setSelectedAvatar(avatarId);
    setHasUnsavedChanges(true);
  };

  const handleNicknameChange = (value) => {
    setUserData(prev => ({ ...prev, nickname: value }));
    setHasUnsavedChanges(true);
  };

  const handleProfilePictureChange = (profile) => {
    setSelectedProfile(profile);
    setHasUnsavedChanges(true);
    setShowProfileModal(false);
  };

  const handleSaveChanges = () => {
    if (!hasUnsavedChanges) {
      alert('No hay cambios para guardar.');
      return;
    }

    // Simulate saving
    const button = document.querySelector('.save-button');
    if (button) {
      button.disabled = true;
      button.innerHTML = '<svg class="animate-spin w-6 h-6 mx-auto" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path class="opacity-75" fill="currentColor" d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>';
    }

    setTimeout(() => {
      if (button) {
        button.disabled = false;
        button.innerHTML = '<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg><span>Guardar Cambios</span>';
      }
      setHasUnsavedChanges(false);
      alert('✅ ¡Cambios guardados exitosamente!\n\nTu perfil ha sido actualizado.');
    }, 2000);
  };

  const handleLogout = () => {
    if (hasUnsavedChanges) {
      if (!window.confirm('Tienes cambios sin guardar. ¿Estás seguro de que quieres cerrar sesión?')) {
        return;
      }
    }

    if (window.confirm('¿Estás seguro de que quieres cerrar sesión?')) {
      alert('👋 ¡Hasta luego! Esperamos verte pronto para seguir aprendiendo física con Timmy.');
    }
  };

  const getProfileColor = (profile) => {
    const colors = {
      'A': 'bg-primary',
      'B': 'bg-accent', 
      'C': 'bg-secondary',
      'D': 'bg-error',
      'E': 'bg-purple-500',
      'F': 'bg-pink-500'
    };
    return colors[profile] || 'bg-primary';
  };

  return (
    <div className="min-h-screen bg-lightBg font-fredoka">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 px-4 lg:px-6 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center">
            <button 
              onClick={() => {
                if (hasUnsavedChanges) {
                  if (!window.confirm('Tienes cambios sin guardar. ¿Quieres salir sin guardar?')) {
                    return;
                  }
                }
                onBackToDashboard();
              }}
              className="mr-4 p-2 rounded-lg text-textSecondary hover:text-textPrimary hover:bg-gray-100 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>
            <h1 className="text-2xl lg:text-3xl font-bold text-textPrimary">
              👤 Mi <span className="text-primary">Perfil</span>
            </h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center bg-secondary bg-opacity-20 px-3 py-2 rounded-full">
              <svg className="w-5 h-5 text-secondary mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path>
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"></path>
              </svg>
              <span className="font-bold text-textPrimary">{userData.coins.toLocaleString()}</span>
            </div>
            <div className={`w-10 h-10 ${getProfileColor(selectedProfile)} rounded-full flex items-center justify-center`}>
              <span className="text-white font-bold">{selectedProfile}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto p-4 lg:p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Profile Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Personal Information */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center mb-6">
                <svg className="w-8 h-8 text-primary mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                </svg>
                <h2 className="text-2xl font-bold text-textPrimary">Información Personal</h2>
              </div>
              
              <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8">
                {/* Profile Picture */}
                <div className="relative">
                  <div className={`w-24 h-24 ${getProfileColor(selectedProfile)} rounded-full flex items-center justify-center text-white text-3xl font-bold`}>
                    {selectedProfile}
                  </div>
                  <button 
                    onClick={handleProfileChange}
                    className="absolute -bottom-2 -right-2 bg-secondary hover:bg-yellow-500 text-textPrimary p-2 rounded-full transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
                    </svg>
                  </button>
                </div>
                
                {/* Form Fields */}
                <div className="flex-1 space-y-4 w-full">
                  <div>
                    <label className="block text-sm font-semibold text-textPrimary mb-2">Apodo</label>
                    <input 
                      type="text" 
                      value={userData.nickname}
                      onChange={(e) => handleNicknameChange(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-textPrimary mb-2">Correo Electrónico</label>
                    <input 
                      type="email" 
                      value={userData.email}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 cursor-not-allowed" 
                      readOnly
                    />
                    <p className="text-xs text-textSecondary mt-1">El correo no se puede modificar por seguridad</p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-textPrimary mb-2">Fecha de Registro</label>
                    <input 
                      type="text" 
                      value={userData.registrationDate}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 cursor-not-allowed" 
                      readOnly
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="stat-card rounded-2xl p-6 text-center">
                <div className="text-3xl mb-2">🪙</div>
                <div className="text-2xl font-bold text-textPrimary">{userData.coins.toLocaleString()}</div>
                <div className="text-textSecondary">Monedas Totales</div>
              </div>
              
              <div className="stat-card rounded-2xl p-6 text-center">
                <div className="text-3xl mb-2">🏆</div>
                <div className="text-2xl font-bold text-textPrimary">{userData.achievements}</div>
                <div className="text-textSecondary">Logros Desbloqueados</div>
              </div>
              
              <div className="stat-card rounded-2xl p-6 text-center">
                <div className="text-3xl mb-2">⏱️</div>
                <div className="text-2xl font-bold text-textPrimary">{userData.playTime}</div>
                <div className="text-textSecondary">Tiempo Jugado</div>
              </div>
            </div>

            {/* Learning Progress */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center mb-6">
                <svg className="w-8 h-8 text-primary mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <h2 className="text-2xl font-bold text-textPrimary">Progreso de Aprendizaje</h2>
              </div>
              
              <div className="space-y-6">
                {learningProgress.map((topic, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className={`font-semibold ${topic.locked ? 'text-textSecondary' : 'text-textPrimary'}`}>
                        {topic.topic}
                      </span>
                      <span className={`font-bold ${
                        topic.percentage === 100 ? 'text-accent' : 
                        topic.percentage > 0 ? 'text-secondary' : 'text-textSecondary'
                      }`}>
                        {topic.percentage}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-4">
                      <div 
                        className={`progress-bar h-4 rounded-full ${
                          topic.percentage === 100 ? 'bg-accent' : 
                          topic.percentage > 0 ? 'bg-secondary' : 'bg-gray-300'
                        }`}
                        style={{ width: `${topic.percentage}%` }}
                      />
                    </div>
                    <div className="flex items-center mt-2">
                      <span className="text-sm text-textSecondary">
                        {topic.locked ? 
                          `🔒 Bloqueado - Completa ${index > 0 ? learningProgress[index - 1].topic : 'temas anteriores'} primero` :
                          `${topic.completed}/${topic.total} desafíos completados`
                        }
                      </span>
                      {!topic.locked && (
                        <div className="ml-auto flex space-x-1">
                          {[...Array(3)].map((_, i) => (
                            <span 
                              key={i} 
                              className={`text-lg ${i < topic.stars ? 'text-secondary' : 'text-gray-300'}`}
                            >
                              ⭐
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Achievements */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center mb-6">
                <svg className="w-8 h-8 text-secondary mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <h2 className="text-2xl font-bold text-textPrimary">Logros Recientes</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {recentAchievements.map((achievement) => (
                  <div 
                    key={achievement.id}
                    className={`achievement-badge bg-${achievement.color} bg-opacity-10 p-4 rounded-xl border border-${achievement.color} border-opacity-30`}
                  >
                    <div className="flex items-center">
                      <div className="text-2xl mr-3">{achievement.icon}</div>
                      <div>
                        <div className="font-bold text-textPrimary">{achievement.title}</div>
                        <div className="text-sm text-textSecondary">{achievement.description}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Timmy Status & Avatars */}
          <div className="space-y-8">
            {/* Timmy Status */}
            <TimmyStatus />

            {/* Avatar Selection */}
            <AvatarSelector 
              selectedAvatar={selectedAvatar}
              onAvatarChange={handleAvatarChange}
            />

            {/* Action Buttons */}
            <div className="space-y-4">
              <button 
                onClick={handleSaveChanges}
                className="save-button w-full bg-primary hover:bg-blue-700 text-white py-4 px-6 rounded-xl font-semibold text-lg transition-colors flex items-center justify-center space-x-2"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                <span>Guardar Cambios</span>
              </button>
              
              <button 
                onClick={handleLogout}
                className="w-full bg-error hover:bg-red-600 text-white py-4 px-6 rounded-xl font-semibold text-lg transition-colors flex items-center justify-center space-x-2"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 01-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd"></path>
                </svg>
                <span>Cerrar Sesión</span>
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Profile Picture Modal */}
      {showProfileModal && (
        <ProfilePictureModal
          selectedProfile={selectedProfile}
          onProfileChange={handleProfilePictureChange}
          onClose={() => setShowProfileModal(false)}
        />
      )}
    </div>
  );
};

export default ProfilePage;
