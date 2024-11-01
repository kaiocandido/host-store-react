import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HomePage from './Containers/HomePage'
import GlobalStyles from './assets/Styles/GlobalStyles'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles />
    <HomePage />
  </StrictMode>,
)
