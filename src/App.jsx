import { useState } from 'react'
import './App.css'
import { Navbar, Personas, Tabla } from './Componente/formulario'

function App() {
  const [personas, setPersonas] = useState([])

  const agregarPersona = (nuevaPersona) => {
    setPersonas([...personas, nuevaPersona])
  }

  return (
    <div className="app">
      {/* Componente Navbar */}
      <Navbar />
     
      <div className="container">
        <Personas onAgregarPersona={agregarPersona} />
        <Tabla personas={personas} />
      </div>
    </div>
  )
}

export default App
