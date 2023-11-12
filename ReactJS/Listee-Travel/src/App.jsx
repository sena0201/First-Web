import Activity from './Activity'
import './App.css'
import Destination from './Destination'
import Header from './Header'
import Tour from './Tour'

function App() {

  return (
    <div className="wrapper">
      <Header/>
      <Destination />
      <Activity />
      <Tour/>
    </div>
  )
}

export default App
