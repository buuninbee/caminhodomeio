// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'

import EightfoldPath from './pages/EightfoldPath.jsx'
import NotableMasters from "./pages/NotableMasters.jsx"
import Meditation from './pages/Meditation'

import App from './App.jsx'
import Nav from './components/Nav'
import Footer from './components/Footer'
import FivePrecepts from './pages/FivePrecepts'
import FourNobleTruths from './pages/FourNobleTruths'
import ThreeJewels from './pages/ThreeJewels'
import Karma from './pages/Karma'
import ThreeMentalPoisons from './pages/ThreeMentalPoisons'
import Books from './pages/Books'

import { HelmetProvider } from 'react-helmet-async';

createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/'  element={<App />}/>
        <Route path='/nobre-caminho-octuplo'  element={<EightfoldPath />}/>
        <Route path='/mestres-notaveis'  element={<NotableMasters />}/>
        <Route path='/meditacao'  element={<Meditation />}/>
        <Route path='/cinco-preceitos'  element={<FivePrecepts />}/>
        <Route path='/quatros-nobres-verdades'  element={<FourNobleTruths />}/>
        <Route path='/tres-joias'  element={<ThreeJewels />}/>
        <Route path='/karma'  element={<Karma />}/>
        <Route path='/tres-venenos-mentais'  element={<ThreeMentalPoisons />}/>
        <Route path='/livros'  element={<Books />}/>
      </Routes>
      <Footer />
    </BrowserRouter>,
  </HelmetProvider>
)
