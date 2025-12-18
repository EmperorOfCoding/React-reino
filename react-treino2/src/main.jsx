import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import App, { Contact } from './App.jsx'

createRoot(document.getElementById('app')).render(
  <StrictMode>
    <Contact />
  </StrictMode>,
)
