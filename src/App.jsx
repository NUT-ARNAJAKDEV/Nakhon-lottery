import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Search from './components/Search/Search'
import Hero from './components/Hero/Hero'
import Order from './components/Order/Order'
import Info from './components/Info/Info'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Search />
      <Hero />
      <Order />
      <Info />
      <Contact />
      <Footer />
    </>
  )
}

export default App
