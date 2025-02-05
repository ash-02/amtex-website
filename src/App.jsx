import { useState } from 'react'
import './App.css'

import Navigation from './Navigation/index.jsx'
import Home from './Home/index.jsx'
import Footer from './Footer/index.jsx'

import TestPage from './test/TestPage.jsx'

function App() {

  return (
    <div className="App
    flex flex-col items-start justify-start h-full w-full
    ">
      <Navigation />
      <Home />
      <Footer />
    </div>
  )
}

export default App
