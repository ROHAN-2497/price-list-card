import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navber from './components/Navbar/Navber'
import PriceList from './components/PriceList/PriceList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navber></Navber>
    <h1 className='text-7xl text-purple-600'>Hello From Tailwind</h1>
     <PriceList></PriceList>
    </>
  )
}

export default App
