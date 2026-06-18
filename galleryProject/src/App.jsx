  import React, { useEffect, useState } from 'react'
  import axios from 'axios'
  import Navbar from './components/NavBar/Navbar'
import Center from './components/Center/Center'

  const App = () => {


    useEffect(() => {
  function handleScroll() {
    if (loading) return;

    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const fullHeight = document.documentElement.scrollHeight;

    if (scrollTop + windowHeight >= fullHeight - 100) {
      loadnewContent();
    }
  }

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

    return (
      <div className='h-screen w-screen bg-black overflow-auto scrollbar-thin scrollbar-thumb-cyan-500'>
        <Navbar></Navbar>
        <Center></Center>

        
      </div>
    )
  }

  export default App