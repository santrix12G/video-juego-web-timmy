import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//import PhaserGame from './Components/PhaserGame/PhaserGame'
import Login from "./Components/Login/login"
import Registro from "./Components/Registro/Registro"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Login/>
      {/* <PhaserGame className='videojuego'/>
      <PhaserGame className='videojuego'/> */}
    </>
  )
}

export default App
