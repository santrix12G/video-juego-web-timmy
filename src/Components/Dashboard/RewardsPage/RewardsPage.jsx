import React, { useState, useEffect } from 'react';
import RewardCard from './RewardCard/RewardCard';
import CharacterBioModal from './CharacterBioModal/CharacterBioModal';
import './RewardsPage.css';

const RewardsPage = ({ onBackToDashboard }) => {
  const [activeTab, setActiveTab] = useState('skins');
  const [coins, setCoins] = useState(1250);
  const [ownedItems, setOwnedItems] = useState(new Set(['superhero', 'curie']));
  const [showBioModal, setShowBioModal] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const skins = [
    {
      id: 'scientist',
      title: 'Científico Loco',
      description: 'Bata de laboratorio y gafas de seguridad',
      price: 50,
      icon: (
        <svg width="80" height="100" viewBox="0 0 80 100" className="mx-auto">
          <circle cx="40" cy="30" r="20" fill="#FACC15"/>
          <rect x="25" y="50" width="30" height="40" fill="white" rx="4"/>
          <rect x="30" y="55" width="20" height="30" fill="#3B82F6" rx="2"/>
          <circle cx="35" cy="28" r="6" fill="none" stroke="#1F2937" strokeWidth="2"/>
          <circle cx="45" cy="28" r="6" fill="none" stroke="#1F2937" strokeWidth="2"/>
          <line x1="41" y1="28" x2="39" y2="28" stroke="#1F2937" strokeWidth="2"/>
          <circle cx="35" cy="28" r="2" fill="#1F2937"/>
          <circle cx="45" cy="28" r="2" fill="#1F2937"/>
          <path d="M32 35 Q40 42 48 35" stroke="#1F2937" strokeWidth="2" fill="none"/>
        </svg>
      ),
      type: 'skin'
    },
    {
      id: 'superhero',
      title: 'Súper Timmy',
      description: 'Capa y traje de superhéroe',
      price: 0,
      owned: true,
      icon: (
        <svg width="80" height="100" viewBox="0 0 80 100" className="mx-auto">
          <circle cx="40" cy="30" r="20" fill="#FACC15"/>
          <rect x="25" y="50" width="30" height="40" fill="#EF4444" rx="4"/>
          <rect x="35" y="45" width="10" height="8" fill="#3B82F6"/>
          <path d="M20 55 Q15 70 25 85 Q40 90 55 85 Q65 70 60 55" fill="#1F2937"/>
          <circle cx="35" cy="28" r="2" fill="#1F2937"/>
          <circle cx="45" cy="28" r="2" fill="#1F2937"/>
          <path d="M32 35 Q40 42 48 35" stroke="#1F2937" strokeWidth="2" fill="none"/>
        </svg>
      ),
      type: 'skin'
    },
    {
      id: 'astronaut',
      title: 'Astronauta',
      description: 'Traje espacial completo con casco',
      price: 75,
      icon: (
        <svg width="80" height="100" viewBox="0 0 80 100" className="mx-auto">
          <circle cx="40" cy="30" r="22" fill="none" stroke="#6B7280" strokeWidth="3"/>
          <circle cx="40" cy="30" r="18" fill="#FACC15"/>
          <rect x="25" y="52" width="30" height="38" fill="white" rx="4"/>
          <rect x="30" y="57" width="20" height="28" fill="#3B82F6" rx="2"/>
          <ellipse cx="35" cy="25" rx="8" ry="12" fill="rgba(255,255,255,0.3)"/>
          <circle cx="35" cy="28" r="2" fill="#1F2937"/>
          <circle cx="45" cy="28" r="2" fill="#1F2937"/>
        </svg>
      ),
      type: 'skin'
    },
    {
      id: 'wizard',
      title: 'Mago de la Física',
      description: 'Túnica mágica y sombrero de mago',
      price: 150,
      locked: true,
      icon: (
        <svg width="80" height="100" viewBox="0 0 80 100" className="mx-auto">
          <circle cx="40" cy="30" r="20" fill="#FACC15"/>
          <rect x="25" y="50" width="30" height="40" fill="#6B7280" rx="4"/>
          <polygon points="40,10 50,50 30,50" fill="#1F2937"/>
          <circle cx="45" cy="15" r="3" fill="#FACC15"/>
          <circle cx="35" cy="28" r="2" fill="#1F2937"/>
          <circle cx="45" cy="28" r="2" fill="#1F2937"/>
        </svg>
      ),
      type: 'skin'
    }
  ];

  const characters = [
    {
      id: 'newton',
      name: 'Isaac Newton',
      description: 'El padre de la mecánica clásica',
      price: 100,
      icon: (
        <svg width="80" height="100" viewBox="0 0 80 100" className="mx-auto">
          <circle cx="40" cy="30" r="20" fill="#F3E8FF"/>
          <path d="M20 25 Q40 15 60 25 Q55 35 40 30 Q25 35 20 25" fill="#E5E7EB"/>
          <rect x="25" y="50" width="30" height="40" fill="#1F2937" rx="4"/>
          <circle cx="65" cy="20" r="6" fill="#EF4444"/>
          <rect x="63" y="14" width="4" height="6" fill="#10B981"/>
          <circle cx="35" cy="28" r="2" fill="#1F2937"/>
          <circle cx="45" cy="28" r="2" fill="#1F2937"/>
        </svg>
      ),
      biography: "🍎 <strong>¡El genio de la gravedad!</strong><br><br>Isaac Newton (1643-1727) fue un físico y matemático inglés que revolucionó nuestra comprensión del universo. Cuando tenía solo 23 años, vio caer una manzana de un árbol y se preguntó: '¿Por qué cae hacia abajo y no hacia arriba?'<br><br><strong>🤓 Dato curioso:</strong> Newton inventó el cálculo matemático, descubrió las leyes del movimiento Y explicó cómo funcionan las órbitas planetarias. ¡Todo esto antes de cumplir 26 años!<br><br><strong>🎯 Su frase famosa:</strong> 'Si he visto más lejos es porque estoy sentado sobre los hombros de gigantes.'",
      type: 'character'
    },
    {
      id: 'einstein',
      name: 'Albert Einstein',
      description: 'El genio de la relatividad',
      price: 150,
      icon: (
        <svg width="80" height="100" viewBox="0 0 80 100" className="mx-auto">
          <circle cx="40" cy="30" r="20" fill="#F3E8FF"/>
          <path d="M15 20 Q25 10 40 15 Q55 10 65 20 Q60 35 40 30 Q20 35 15 20" fill="#E5E7EB"/>
          <rect x="25" y="50" width="30" height="40" fill="#6B7280" rx="4"/>
          <ellipse cx="40" cy="35" rx="8" ry="2" fill="#E5E7EB"/>
          <circle cx="35" cy="28" r="2" fill="#1F2937"/>
          <circle cx="45" cy="28" r="2" fill="#1F2937"/>
        </svg>
      ),
      biography: "🧠 <strong>¡El científico más famoso del mundo!</strong><br><br>Albert Einstein (1879-1955) fue un físico alemán que cambió para siempre nuestra comprensión del tiempo, el espacio y la energía. Su teoría de la relatividad nos enseñó que el tiempo puede ir más lento o más rápido dependiendo de qué tan rápido te muevas.<br><br><strong>🤓 Dato curioso:</strong> Einstein no habló hasta los 4 años y sus maestros pensaban que no era muy inteligente. ¡Qué equivocados estaban!<br><br><strong>🎯 Su ecuación más famosa:</strong> E=mc² (La energía es igual a la masa por la velocidad de la luz al cuadrado)",
      type: 'character'
    },
    {
      id: 'curie',
      name: 'Marie Curie',
      description: 'Pionera de la radioactividad',
      price: 0,
      owned: true,
      icon: (
        <svg width="80" height="100" viewBox="0 0 80 100" className="mx-auto">
          <circle cx="40" cy="30" r="20" fill="#F3E8FF"/>
          <path d="M25 20 Q40 15 55 20 Q50 35 40 30 Q30 35 25 20" fill="#8B5CF6"/>
          <rect x="25" y="50" width="30" height="40" fill="#1F2937" rx="4"/>
          <rect x="60" y="25" width="8" height="15" fill="#10B981" rx="2"/>
          <circle cx="35" cy="28" r="2" fill="#1F2937"/>
          <circle cx="45" cy="28" r="2" fill="#1F2937"/>
        </svg>
      ),
      biography: "⚛️ <strong>¡La primera mujer en ganar un Premio Nobel!</strong><br><br>Marie Curie (1867-1934) fue una física y química polaca que descubrió dos elementos químicos: el polonio y el radio. Fue la primera mujer en ganar un Premio Nobel y la única persona en ganar Premios Nobel en dos ciencias diferentes.<br><br><strong>🤓 Dato curioso:</strong> Marie trabajaba con materiales tan radioactivos que sus cuadernos de laboratorio todavía son peligrosos de tocar, ¡más de 100 años después!<br><br><strong>🎯 Su frase inspiradora:</strong> 'Nada en la vida debe ser temido, solo comprendido.'",
      type: 'character'
    },
    {
      id: 'galileo',
      name: 'Galileo Galilei',
      description: 'El padre de la astronomía moderna',
      price: 120,
      icon: (
        <svg width="80" height="100" viewBox="0 0 80 100" className="mx-auto">
          <circle cx="40" cy="30" r="20" fill="#F3E8FF"/>
          <path d="M30 40 Q40 50 50 40 Q45 45 40 45 Q35 45 30 40" fill="#E5E7EB"/>
          <rect x="25" y="50" width="30" height="40" fill="#8B5CF6" rx="4"/>
          <rect x="60" y="20" width="15" height="4" fill="#6B7280" rx="2"/>
          <circle cx="35" cy="28" r="2" fill="#1F2937"/>
          <circle cx="45" cy="28" r="2" fill="#1F2937"/>
        </svg>
      ),
      biography: "🔭 <strong>¡El padre de la astronomía moderna!</strong><br><br>Galileo Galilei (1564-1642) fue un astrónomo, físico y matemático italiano que mejoró el telescopio y fue el primero en usarlo para estudiar el cielo. Descubrió las lunas de Júpiter y demostró que la Tierra gira alrededor del Sol.<br><br><strong>🤓 Dato curioso:</strong> Galileo dejó caer objetos de diferentes pesos desde la Torre Inclinada de Pisa para demostrar que todos caen a la misma velocidad (¡contrario a lo que pensaba todo el mundo!).<br><br><strong>🎯 Su descubrimiento revolucionario:</strong> 'Y sin embargo, se mueve' (refiriéndose a la Tierra girando alrededor del Sol)",
      type: 'character'
    }
  ];

  const handlePurchase = (item) => {
    if (item.locked) {
      alert('🔒 Este item se desbloqueará cuando completes más desafíos. ¡Sigue progresando con Timmy!');
      return;
    }

    if (coins >= item.price) {
      setCoins(coins - item.price);
      setOwnedItems(prev => new Set([...prev, item.id]));
      
      // Create confetti effect
      createConfetti();
      
      // Show character biography for historical characters
      if (item.type === 'character') {
        setTimeout(() => {
          setSelectedCharacter(item);
          setShowBioModal(true);
        }, 1000);
      } else {
        // Show purchase success message for skins
        setTimeout(() => {
          alert(`🎉 ¡Felicidades! Has desbloqueado el skin "${item.title}". ¡Timmy se ve genial con su nuevo look!`);
        }, 1000);
      }
    } else {
      alert(`💰 Necesitas ${item.price - coins} monedas más para comprar este item. ¡Sigue resolviendo desafíos con Timmy para ganar más monedas!`);
    }
  };

  const createConfetti = () => {
    const colors = ['#FACC15', '#3B82F6', '#10B981', '#EF4444', '#8B5CF6'];
    
    for (let i = 0; i < 50; i++) {
      setTimeout(() => {
        const confetti = document.createElement('div');
        confetti.className = 'fixed w-2.5 h-2.5 z-50 animate-confetti-fall';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 2 + 's';
        document.body.appendChild(confetti);
        
        setTimeout(() => {
          confetti.remove();
        }, 3000);
      }, i * 50);
    }
  };

  const currentItems = activeTab === 'skins' ? skins : characters;

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
              🏅 Recompensas de <span className="text-primary">Timmy</span>
            </h1>
          </div>
          
          {/* Coins Display */}
          <div className="flex items-center bg-secondary bg-opacity-20 px-4 py-3 rounded-full">
            <div className="animate-coin-bounce mr-3">
              <svg className="w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path>
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"></path>
              </svg>
            </div>
            <span className="font-bold text-2xl text-textPrimary">{coins.toLocaleString()}</span>
            <span className="text-textSecondary ml-2">monedas</span>
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
                ¡Personaliza tu Aventura! 🎨
              </h2>
              <p className="text-textSecondary text-lg leading-relaxed">
                Usa las monedas que has ganado para desbloquear nuevos looks para Timmy y conocer a los grandes científicos de la historia. 
                ¡Cada compra te acerca más a completar tu colección!
              </p>
            </div>
            <div className="relative">
              <svg width="120" height="120" viewBox="0 0 120 120" className="drop-shadow-lg">
                <rect x="30" y="50" width="60" height="50" fill="#3B82F6" rx="8"/>
                <rect x="25" y="45" width="70" height="60" fill="#FACC15" rx="8"/>
                <rect x="55" y="35" width="10" height="80" fill="#EF4444"/>
                <rect x="20" y="70" width="80" height="10" fill="#EF4444"/>
                <circle cx="15" cy="30" r="3" fill="#FACC15"/>
                <circle cx="105" cy="25" r="2" fill="#10B981"/>
                <circle cx="110" cy="45" r="2" fill="#3B82F6"/>
                <circle cx="10" cy="60" r="2" fill="#EF4444"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl shadow-lg mb-8">
          <div className="flex border-b border-gray-200">
            <button 
              onClick={() => setActiveTab('skins')}
              className={`flex-1 py-4 px-6 text-center font-semibold rounded-tl-2xl transition-all duration-300 ${
                activeTab === 'skins' 
                  ? 'bg-gradient-to-r from-primary to-blue-800 text-white' 
                  : 'text-textSecondary hover:text-textPrimary hover:bg-gray-50'
              }`}
            >
              <span className="flex items-center justify-center space-x-2">
                <span>👕</span>
                <span>Skins y Accesorios</span>
              </span>
            </button>
            <button 
              onClick={() => setActiveTab('characters')}
              className={`flex-1 py-4 px-6 text-center font-semibold rounded-tr-2xl transition-all duration-300 ${
                activeTab === 'characters' 
                  ? 'bg-gradient-to-r from-primary to-blue-800 text-white' 
                  : 'text-textSecondary hover:text-textPrimary hover:bg-gray-50'
              }`}
            >
              <span className="flex items-center justify-center space-x-2">
                <span>🧑‍🔬</span>
                <span>Personajes Históricos</span>
              </span>
            </button>
          </div>
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {currentItems.map((item) => (
            <RewardCard
              key={item.id}
              item={item}
              owned={ownedItems.has(item.id)}
              coins={coins}
              onPurchase={() => handlePurchase(item)}
            />
          ))}
        </div>
      </main>

      {/* Character Biography Modal */}
      {showBioModal && selectedCharacter && (
        <CharacterBioModal
          character={selectedCharacter}
          onClose={() => {
            setShowBioModal(false);
            setSelectedCharacter(null);
          }}
        />
      )}
    </div>
  );
};

export default RewardsPage;
