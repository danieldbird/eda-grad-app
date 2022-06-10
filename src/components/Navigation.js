import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
  const { loginWithRedirect, logout, user } = useAuth0()
  return (
    <nav className="container mx-auto flex justify-between items-center">
      <h1 className="font-bold text-3xl py-4 text-white">EDA Grad App</h1>
      <ul className="flex text-white">
        <li className="p-2 mx-2">
          <Link to="/">Home</Link>
        </li>
        {/* <li className="p-2 mx-2">
          <Link to="/register">Register</Link>
        </li> */}
        {!user ? (
          <>
            <li className="p-2 mx-2">
              <button
                className="btn btn-primary btn-block"
                onClick={() =>
                  loginWithRedirect({
                    // redirectUri: `${window.location.origin}/register`,
                  })
                }
              >
                Sign In
              </button>
            </li>
            <li className="p-2 mx-2">
              <button
                className="btn btn-primary btn-block"
                onClick={() =>
                  loginWithRedirect({
                    screen_hint: 'signup',
                    // redirectUri: `${window.location.origin}/register`,
                  })
                }
              >
                Sign Up
              </button>
            </li>
          </>
        ) : (
          <li className="p-2 mx-2">
            <button
              className="btn btn-primary btn-block"
              onClick={() =>
                logout({
                  returnTo: window.location.origin,
                })
              }
            >
              Logout
            </button>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default Navigation
