import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import NewComponent from './New.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <App />
    <NewComponent/>
  </>,
)
