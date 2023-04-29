import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { TenziesProvider } from './context/TenziesContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <TenziesProvider> 
     <App />
    </TenziesProvider>
  </React.StrictMode>,
)
