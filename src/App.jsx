import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PhaserGame from './Components/PhaserGame/PhaserGame'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PhaserGame className='videojuego'/>
      <PhaserGame className='videojuego'/>
    </>
  )
}

export default App
