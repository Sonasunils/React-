import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import Navsection from './Navsection.jsx'
import Treanding from './Treanding.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navsection />
 
   <Treanding />

  </StrictMode>,
)
