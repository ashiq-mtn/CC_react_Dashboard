import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useState } from 'react'

import './index.css'

import Dashboard from './components/Dashboard'
import SignIn from './components/SignIn'

function App () {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const handleLogin = () => {
    setIsAuthenticated(true)
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            !isAuthenticated ? (
              <SignIn onLogin={handleLogin} />
            ) : (
              <Navigate to='/dashboard' />
            )
          }
        />
        <Route
          path='/dashboard'
          element={isAuthenticated ? <Dashboard /> : <Navigate to='/' />}
        />
      </Routes>
    </BrowserRouter>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
