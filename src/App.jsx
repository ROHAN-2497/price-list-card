import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navber from './components/Navbar/Navber'
import PriceList from './components/PriceList/PriceList'
import Dashboard from './components/Dashboard/Dashboard'
import Dashboard2 from './components/Dashboard2/Dashboard2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navber></Navber>
    <h1 className='text-7xl text-purple-600'>Hello From Tailwind</h1>
     <PriceList></PriceList>
     <Dashboard></Dashboard>
     <Dashboard2></Dashboard2>
    </>
  )
}

export default App
