
import './App.css'
import Header from './components/header/header'
import Home from './components/home/Home'
import OurWork from './components/ourWork/OurWork'
import Provide from './components/provide/Provide'
import Work from './components/work/Work'

function App() {

  return (
    <div className="app">
      <Header />
      <Home />
      <Work />
      <Provide />
      <OurWork />
    </div>
  )
}

export default App
