import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import reportWebVitals from './reportWebVitals'
import Auth0ProviderWithHistory from './auth/auth0-provider-with-history'
import Register from './pages/Register'
import Home from './pages/Home'
import Layout from './layout/Layout'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0ProviderWithHistory>
        <Layout>
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/register" index element={<Register />} />
          </Routes>
        </Layout>
      </Auth0ProviderWithHistory>
    </BrowserRouter>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
