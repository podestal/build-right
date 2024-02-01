import './App.css'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Testimonials from './pages/Testimonials'
import About from './pages/About'
import ServicesPage from './pages/ServicesPage'
import Login from './pages/Login'
import PersistLogin from './components/PersistLogin'
import Contact from './pages/Contact'
import { useEffect } from 'react'
import Process from './pages/Process'
import Footer from './components/Footer'


const App = () => {

  const url = window.location.href

  useEffect(() => {
    console.log(url)
  }, [url])

  return (
    <div className='app-container'>
      <Header />
      <Routes>
        <Route element={<PersistLogin />}>
          <Route path='home' element={<Home />}/>
          <Route path='about' element={<About />}/>
          <Route path='testimonials' element={<Testimonials />}/>
          <Route path='services' element={<ServicesPage />}/>
          <Route path='login' element={<Login />}/>
          <Route path='contact' element={<Contact />}/>
          <Route path='process' element={<Process />}/>
        </Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
