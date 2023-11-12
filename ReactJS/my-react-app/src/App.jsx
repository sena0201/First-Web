import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Title from './Title'
import Started from './Started'
import Deeper from './Deeper'
import Source from './Source'
import Footer from './Footer'

function App() {
  return (
    <div className="">
      <Header />
      <Title />
      <Started />
      <Deeper />
      <Source />
      <Footer />
    </div>
  )
}

export default App
