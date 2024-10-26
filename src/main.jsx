import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './assets/containers/index.jsx'
import { GlobalStyles } from './assets/styles/GlobalStyles.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles />
    <Home />
  </StrictMode>,
)
