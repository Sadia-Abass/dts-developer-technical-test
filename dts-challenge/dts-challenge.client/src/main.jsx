import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Index from './components/Index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Index /> */}
  </StrictMode>,
)
