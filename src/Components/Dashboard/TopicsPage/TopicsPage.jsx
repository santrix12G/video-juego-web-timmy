import React, { useState } from 'react';
import TopicCard from './TopicCard/TopicCard';
import TopicModal from './TopicModal/TopicModal';
import TheoryPage from './TheoryPage/TheoryPage';
import './TopicsPage.css';

const TopicsPage = ({ onBackToDashboard, onStartGame }) => {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showTheory, setShowTheory] = useState(false);

  const topics = [
    {
      id: 'equilibrio',
      title: 'Equilibrio Estático',
      description: 'Aprende sobre fuerzas balanceadas y objetos en reposo',
      completed: 5,
      total: 5,
      status: 'completed',
      icon: (
        <svg width="80" height="60" viewBox="0 0 80 60" className="mx-auto">
          <rect x="30" y="25" width="20" height="4" fill="#3B82F6" rx="2"/>
          <circle cx="20" cy="27" r="12" fill="#FACC15"/>
          <circle cx="60" cy="27" r="12" fill="#10B981"/>
          <rect x="38" y="29" width="4" height="25" fill="#6B7280" rx="2"/>
          <rect x="25" y="54" width="30" height="4" fill="#6B7280" rx="2"/>
        </svg>
      ),
      available: true
    },
    {
      id: 'torque',
      title: 'Torque',
      description: 'Descubre la fuerza de rotación y momentos de fuerza',
      completed: 3,
      total: 5,
      status: 'in-progress',
      icon: (
        <svg width="80" height="60" viewBox="0 0 80 60" className="mx-auto">
          <rect x="10" y="28" width="60" height="4" fill="#3B82F6" rx="2"/>
          <circle cx="25" cy="30" r="8" fill="#FACC15"/>
          <circle cx="55" cy="30" r="12" fill="#EF4444"/>
          <rect x="38" y="15" width="4" height="30" fill="#6B7280" rx="2"/>
          <polygon points="40,10 45,20 35,20" fill="#6B7280"/>
        </svg>
      ),
      available: true
    },
    {
      id: 'gravedad',
      title: 'Centro de Gravedad',
      description: 'Encuentra el punto de equilibrio de los objetos',
      completed: 0,
      total: 5,
      status: 'locked',
      icon: (
        <svg width="80" height="60" viewBox="0 0 80 60" className="mx-auto">
          <rect x="20" y="35" width="40" height="20" fill="#3B82F6" rx="4"/>
          <circle cx="40" cy="25" r="6" fill="#EF4444"/>
          <line x1="40" y1="19" x2="40" y2="35" stroke="#EF4444" strokeWidth="2"/>
          <polygon points="40,15 43,21 37,21" fill="#EF4444"/>
        </svg>
      ),
      available: false
    },
    {
      id: 'elasticidad',
      title: 'Elasticidad',
      description: 'Explora la deformación y recuperación de materiales',
      completed: 0,
      total: 5,
      status: 'locked',
      icon: (
        <svg width="80" height="60" viewBox="0 0 80 60" className="mx-auto">
          <rect x="10" y="10" width="60" height="4" fill="#6B7280"/>
          <path d="M40 14 Q35 25 40 35 Q45 45 40 55" stroke="#10B981" strokeWidth="3" fill="none"/>
          <circle cx="40" cy="55" r="8" fill="#FACC15"/>
        </svg>
      ),
      available: false
    }
  ];

  const handleTopicClick = (topic) => {
    if (!topic.available) {
      alert('🔒 Este tema se desbloqueará cuando completes los temas anteriores.\n\n¡Sigue progresando con Timmy!');
      return;
    }
    
    setSelectedTopic(topic);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedTopic(null);
  };

  const handleStartTheory = () => {
    setShowModal(false);
    setShowTheory(true);
  };

  const handleStartPractice = () => {
    setShowModal(false);
    if (selectedTopic && onStartGame) {
      onStartGame(selectedTopic.title);
    } else if (selectedTopic) {
      alert(`🎮 ¡Iniciando práctica de ${selectedTopic.title}!\n\nEn una aplicación real, aquí se cargarían los escenarios interactivos donde Timmy necesita tu ayuda para resolver desafíos.`);
    }
  };

  const handleBackToTopics = () => {
    setShowTheory(false);
    setSelectedTopic(null);
  };

  if (showTheory) {
    return (
      <TheoryPage 
        topic={selectedTopic}
        onBack={handleBackToTopics}
      />
    );
  }

  return (
    <div className="min-h-screen bg-lightBg font-fredoka">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 px-4 lg:px-6 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center">
            <button 
              onClick={onBackToDashboard}
              className="mr-4 p-2 rounded-lg text-textSecondary hover:text-textPrimary hover:bg-gray-100 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>
            <h1 className="text-2xl lg:text-3xl font-bold text-textPrimary">
              Temas de <span className="text-primary">Física</span> 📚
            </h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center bg-secondary bg-opacity-20 px-3 py-2 rounded-full">
              <svg className="w-5 h-5 text-secondary mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path>
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"></path>
              </svg>
              <span className="font-bold text-textPrimary">1,250</span>
            </div>
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold">A</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto p-4 lg:p-6">
        {/* Introduction */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="flex-1 mb-4 lg:mb-0 lg:mr-6">
              <h2 className="text-2xl font-bold text-textPrimary mb-3">
                ¡Explora los Fundamentos de la Física! 🚀
              </h2>
              <p className="text-textSecondary text-lg leading-relaxed">
                Cada tema incluye teoría explicada de forma sencilla y práctica interactiva. 
                Ayuda a Timmy a resolver desafíos mientras aprendes conceptos fundamentales de la física.
              </p>
            </div>
            <div className="animate-bounce-gentle">
              <svg width="120" height="100" viewBox="0 0 120 100" className="drop-shadow-lg">
                {/* Book */}
                <rect x="20" y="30" width="80" height="60" fill="#3B82F6" rx="4"/>
                <rect x="25" y="35" width="70" height="50" fill="white" rx="2"/>
                <line x1="35" y1="45" x2="85" y2="45" stroke="#3B82F6" strokeWidth="2"/>
                <line x1="35" y1="55" x2="75" y2="55" stroke="#6B7280" strokeWidth="1"/>
                <line x1="35" y1="65" x2="80" y2="65" stroke="#6B7280" strokeWidth="1"/>
                <line x1="35" y1="75" x2="70" y2="75" stroke="#6B7280" strokeWidth="1"/>
                {/* Physics symbols */}
                <circle cx="90" cy="20" r="8" fill="#FACC15"/>
                <text x="90" y="25" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">F</text>
              </svg>
            </div>
          </div>
        </div>

        {/* Topics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {topics.map((topic) => (
            <TopicCard
              key={topic.id}
              topic={topic}
              onClick={() => handleTopicClick(topic)}
            />
          ))}
        </div>
      </main>

      {/* Topic Selection Modal */}
      {showModal && selectedTopic && (
        <TopicModal
          topic={selectedTopic}
          onClose={handleCloseModal}
          onStartTheory={handleStartTheory}
          onStartPractice={handleStartPractice}
        />
      )}
    </div>
  );
};

export default TopicsPage;
