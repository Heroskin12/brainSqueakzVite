import NavigationBar from './components/NavigationBar'
import Hero from './components/Hero'
import Dashboard from './components/Dashboard'
import Footer from './components/Footer'
import { useState, useEffect } from 'react'

const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <>
      <NavigationBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        {isLoggedIn ? <Dashboard /> : <Hero />}
      <Footer/>    
    </>
  )
}

export default App