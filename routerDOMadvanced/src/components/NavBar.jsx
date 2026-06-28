import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav className='bg-black text-white flex justify-evenly p-3 gap-5 text-2xl'>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/product/0">Product</Link>
      </nav>
  )
}

export default NavBar