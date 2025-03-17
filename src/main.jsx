import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { DataInfo } from '../Data.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataInfo>
      <App />
      </DataInfo>
  </StrictMode>
)
