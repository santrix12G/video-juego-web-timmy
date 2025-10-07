import React from 'react';

const Header = ({ onToggleMobileMenu, isMobileMenuOpen }) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 px-4 lg:px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Mobile Menu Button */}
        <button 
          onClick={onToggleMobileMenu}
          className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
          aria-label="Toggle mobile menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        
        {/* Welcome Message */}
        <div className="flex-1 lg:flex-none">
          <h2 className="text-xl lg:text-2xl font-bold text-textPrimary">
            Hola, <span className="text-primary">Alex</span>, ¿listo para ayudar a Timmy? 🚀
          </h2>
        </div>
        
        {/* Coins and Profile */}
        <div className="flex items-center space-x-4">
          {/* Coins */}
          <div className="flex items-center bg-secondary bg-opacity-20 px-3 py-2 rounded-full">
            <div className="animate-coin-bounce mr-2">
              <svg className="w-6 h-6 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path>
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"></path>
              </svg>
            </div>
            <span className="font-bold text-textPrimary">1,250</span>
          </div>
          
          {/* Profile */}
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors">
            <span className="text-white font-bold">A</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
