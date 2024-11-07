import React from 'react'

import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <ul>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
                <NavLink to="/about">About</NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Navbar