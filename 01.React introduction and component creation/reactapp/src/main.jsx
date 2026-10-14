import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Component1 from './Component1.jsx'
import Content from './Content.jsx'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <Content/>
   <Footer/>
  </StrictMode>,
)
