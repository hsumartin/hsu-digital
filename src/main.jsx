import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'   // 🧠 hinzugefügt
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>       {/* 🧠 globaler SEO-Kontext */}
      <App />
    </HelmetProvider>
  </React.StrictMode>,
)
