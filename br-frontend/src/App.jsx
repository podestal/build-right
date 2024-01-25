import './App.css'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Testimonials from './pages/Testimonials'
import About from './pages/About'
import ServicesPage from './pages/ServicesPage'
import Login from './pages/Login'


const App = () => {

  return (
    <div>
      <Header />
      <Routes>
        <Route path='' element={<Home />}/>
        <Route path='about' element={<About />}/>
        <Route path='testimonials' element={<Testimonials />}/>
        <Route path='services' element={<ServicesPage />}/>
        <Route path='login' element={<Login />}/>
      </Routes>
    </div>
  )
}

export default App
