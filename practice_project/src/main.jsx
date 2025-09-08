import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ApiCard from './Components/ApiCard'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ApiCard/>
  </StrictMode>,
)
