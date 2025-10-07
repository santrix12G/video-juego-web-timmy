import { useState } from 'react'
import './App.css'
//import PhaserGame from './Components/PhaserGame/PhaserGame'
import Login from "./Components/Login/login"
import Registro from "./Components/Registro/Registro"
import Dashboard from "./Components/Dashboard/Dashboard"

function App() {
  const [currentView, setCurrentView] = useState('login') // 'login', 'dashboard', 'game'

  // Simple routing logic
  const renderCurrentView = () => {
    switch (currentView) {
      case 'login':
        return <Login onLoginSuccess={() => setCurrentView('dashboard')} />
      case 'dashboard':
        return <Dashboard onStartGame={() => setCurrentView('game')} />
      case 'game':
        // You can integrate the PhaserGame component here
        return (
          <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="text-center">
              <h1 className="text-2xl font-bold mb-4">🎮 Juego en Desarrollo</h1>
              <button 
                onClick={() => setCurrentView('dashboard')}
                className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Volver al Dashboard
              </button>
            </div>
          </div>
        )
      default:
        return <Login onLoginSuccess={() => setCurrentView('dashboard')} />
    }
  }

  return (
    <>
      {renderCurrentView()}
      {/* <PhaserGame className='videojuego'/>
      <PhaserGame className='videojuego'/> */}
    </>
  )
}

export default App
