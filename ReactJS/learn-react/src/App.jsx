import { useState } from 'react';
import './App.scss';
import Form from './components/form';

function App() {

  const [show, setShow] = useState(true);

  const handleShowClick = () => {
    // setShow(!show)
  }

  return (
    <div className='app'>
      <button onClick={handleShowClick}>Show</button>
      {show && <Form />}
    </div>
  )
}

export default App
