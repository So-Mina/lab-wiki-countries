import React from 'react'
import { NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <div className='NavBar'>
      
      <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <NavLink className="navbar-brand" to="/">WikiCountries</NavLink>
        </div>
      </nav>

    </div>
  )
}

export default NavBar