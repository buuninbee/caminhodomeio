// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'

import EightfoldPath from './pages/EightfoldPath.jsx'
import Notablemasters from "./pages/Notablemasters.jsx"
import Meditation from './pages/Meditation'

import App from './App.jsx'
import Nav from './components/Nav'
import Footer from './components/Footer'
import FivePrecepts from './pages/FivePrecepts'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Nav />
    <Routes>
      <Route path='/'  element={<App />}/>
      <Route path='/nobre-caminho-octuplo'  element={<EightfoldPath />}/>
      <Route path='/mestres-notaveis'  element={<Notablemasters />}/>
      <Route path='/meditacao'  element={<Meditation />}/>
      <Route path='/cinco-preceitos'  element={<FivePrecepts />}/>
    </Routes>
    <Footer />
  </BrowserRouter>,
)
