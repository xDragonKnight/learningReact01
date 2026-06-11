import React from 'react'
import { NotebookText } from 'lucide-react';
import { CirclePlus } from 'lucide-react';
function Navbar() {
  return (
    <div className='p-5 flex justify-between'>
    <div className='flex gap-1'>
       <NotebookText size={42} color="#ffffff" />
       <h1 className='text-2xl pt-1'>Notes App</h1>
    </div>
    <div className='lg:hidden'>
    <button className='active:scale-75'><CirclePlus size={44} color="#ffffff" /></button>
    </div>

    </div>
  )
}

export default Navbar
