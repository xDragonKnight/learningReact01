import React from 'react'
import {Routes,Route, Link} from 'react-router-dom'
import Contact from '../pages/contact.jsx'
import Forms from '../pages/forms.jsx'
import About from '../pages/about.jsx'

function App() {

   
  return (

    


    <div className='bg-white h-screen w-screen text-black'>
      
      <nav className='flex justify-center items-center p-5 gap-3'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/forms'>Forms</Link>
        <Link to='/contact'>Contact</Link>
      </nav>
      

        <Routes>
          <Route path='/' element={<h1>Hey</h1>} />
        <Route path='/about' element={<About></About>} ></Route>
        <Route path='/contact' element={<Contact></Contact>} ></Route>
        <Route path='/forms' element={<Forms></Forms>} ></Route>
      </Routes>

   


    </div>
  )
}

export default App
