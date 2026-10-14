import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Reboot from './Reboot.jsx'
import Contents from './Contents.jsx'
// import Hooks from './hooks.jsx'
import Increment from './Increment.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Reboot/>
    <Contents/> 
    <Increment />
  </StrictMode>,
)
