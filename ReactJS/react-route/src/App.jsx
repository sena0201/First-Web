
import { Route, Routes } from "react-router-dom"
import HomePage from "./Pages/HomePage"
import CustomersPage from "./Pages/CustomersPage"
import ContactPage from "./Pages/ContactPage"
import AboutUsPage from "./Pages/AboutUsPage"
import './App.css'
import Header from './Header'


function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/customers" element={<CustomersPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
      </Routes>
    </div>
  )
}

export default App
