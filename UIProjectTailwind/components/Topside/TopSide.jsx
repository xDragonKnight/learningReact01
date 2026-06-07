import React from 'react'
import {Phone} from 'lucide-react'
function TopSide() {
  return (

<nav className="flex justify-between items-center px-3 py-4 bg-linear-to-b from-black to-transparent shadow-sm">
        <div className='flex gap-8'>
            <button className='text-white hover:text-blue-800 transition-colors duration-300 ease-in-out'>Home</button>
            <button className='text-white hover:text-blue-800 transition-colors duration-300 ease-in-out'>About</button>
            <button className='text-white hover:text-blue-800 transition-colors duration-300 ease-in-out'>Resume</button>
            <button className='text-white hover:text-blue-800 transition-colors duration-300 ease-in-out'>Portfolio</button>
        </div>
    <p className='flex gap-1 text-black bg-linear-to-r from-[#1c253f] to-[#22265d] rounded-full px-3 py-1'><Phone size={24}></Phone>+92 318-0979787</p>
    </nav>
    
  )
}

export default TopSide
