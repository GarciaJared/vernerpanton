import { useState } from 'react'
import NavbarComponent from './components/navbar'
import Panton3DModel from './components/pantone'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavbarComponent />
      <Panton3DModel />
    </>
  )
}

export default App
