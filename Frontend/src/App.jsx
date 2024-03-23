import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './components/navigation'
import Statistics from './components/Statistics'
import Card from './components/Card'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navigation/>
      <Statistics/>
      <Card/>
    </>
  )
}

export default App
