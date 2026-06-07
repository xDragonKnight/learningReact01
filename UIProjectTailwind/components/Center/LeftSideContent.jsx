import React from 'react'

function LeftSideContent() {
  return (
      <div className="flex min-h-[calc(94vh-80px)] items-center pl-20">
      
      <div className='flex flex-col'>
        <h1 className='text-white uppercase text-4xl tracking-tight font-poppins'>Ahmad YAR<br></br>
        <span className='text-white uppercase text-5xl tracking-tight font-bold font-poppins'>Hassan Khan</span>
        </h1>
        <p className='text-white tracking-widest font-poppins ml-0.5 opacity-65'>React Developer | Game Developer | Software Developer
        </p>

        <div className='flex gap-4 mt-10'>
            <button className='text-white px-8 py-1 rounded-2xl border-2 bg-transparent hover:bg-white hover:text-black transition-colors duration-300 ease-in-out'>Resume</button>
             <button className='text-white px-8 py-1 rounded-2xl border-2 bg-transparent hover:bg-white hover:text-black transition-colors duration-300 ease-in-out'>Portfolio</button>

        </div>
      </div>
      
    </div>
  )
}

export default LeftSideContent
