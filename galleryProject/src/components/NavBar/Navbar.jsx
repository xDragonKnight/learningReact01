import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
function Navbar() {
  return (
    <div>
    <div className="flex text-white p-7 ">
      <div className="flex flex-1 gap-3 items-center">
        <FaFacebookF />
        <BsTwitterX />
        <FaInstagram />
      </div>
      <h1 className='flex-1 text-center text-3xl font-medium'>#Gallery</h1>

      <div className='flex gap-3 flex-1 items-center justify-end'>
         <CiSearch />
         <FaCartShopping />
        </div>  
      </div>
    <nav className='flex text-gray-400 pb-4 uppercase gap-2 md:gap-8 items-center justify-center-safe text-sm font-medium'>
      <a href="/" target='/blank' >home</a>
      <a href="/"   target='/blank'>about</a>
      <a href="/"target='/blank'>gallery</a>
      <a href="/"target='/blank'>blog</a>
      <a href="/"target='/blank'>contact</a>
    </nav>
    </div>
  )
}

export default Navbar
