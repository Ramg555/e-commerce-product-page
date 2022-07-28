import BaseComponent from 'bootstrap/js/dist/base-component'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './css/index.css'
import "../node_modules/bootstrap/dist/js/bootstrap"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
