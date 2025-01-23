// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import EightfoldPath from './pages/EightfoldPath.jsx'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/'  element={<App />}/>
      <Route path='/nobre-caminho-octuplo'  element={<EightfoldPath />}/>
    </Routes>
  </BrowserRouter>,
)
