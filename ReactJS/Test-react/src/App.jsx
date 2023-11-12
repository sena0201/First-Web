import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';

function App() {

  return (
    <Router>
      <main className=''>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/about" element={<About />}/>
        </Routes>
      </main>
    </Router>
  );
}

export default App