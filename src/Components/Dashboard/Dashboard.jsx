import React, { useState } from 'react';
import Sidebar from './Sidebar/Sidebar';
import Header from './Header/Header';
import ProgressOverview from './ProgressOverview/ProgressOverview';
import Achievements from './Achievements/Achievements';
import TopicsGrid from './TopicsGrid/TopicsGrid';
import TopicsPage from './TopicsPage/TopicsPage';
import RewardsPage from './RewardsPage/RewardsPage';
import ProfilePage from './ProfilePage/ProfilePage';
import './Dashboard.css';

const Dashboard = ({ onStartGame }) => {
  const [activeSection, setActiveSection] = useState('inicio');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSectionChange = (section) => {
    setActiveSection(section);
    setIsMobileMenuOpen(false); // Close mobile menu when navigating
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'inicio':
        return (
          <div className="space-y-6">
            <ProgressOverview />
            <Achievements />
            <TopicsGrid onStartGame={onStartGame} />
          </div>
        );
      case 'temas':
        return (
          <TopicsPage 
            onBackToDashboard={() => setActiveSection('inicio')}
            onStartGame={onStartGame}
          />
        );
      case 'recompensas':
        return (
          <RewardsPage 
            onBackToDashboard={() => setActiveSection('inicio')}
          />
        );
      case 'perfil':
        return (
          <ProfilePage 
            onBackToDashboard={() => setActiveSection('inicio')}
          />
        );
      case 'configuracion':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-textPrimary mb-6">Configuración</h2>
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <p className="text-textSecondary">
                Ajusta el idioma, sonido y opciones de accesibilidad.
              </p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-lightBg font-fredoka">
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <Sidebar 
        activeSection={activeSection}
        onSectionChange={handleSectionChange}
        isMobileMenuOpen={isMobileMenuOpen}
        onCloseMobileMenu={() => setIsMobileMenuOpen(false)}
      />
      
      {/* Main Content */}
      <div className="lg:ml-64 min-h-screen">
        {/* Header */}
        <Header 
          onToggleMobileMenu={toggleMobileMenu}
          isMobileMenuOpen={isMobileMenuOpen}
        />
        
        {/* Main Content Area */}
        <main className="p-4 lg:p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
