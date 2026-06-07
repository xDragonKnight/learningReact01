import React from 'react'
import TopSide from '../components/Topside/TopSide'
import Center from '../components/Center/Center'
import Bottom from '../components/Bottom/Bottom'
function App() {
  return (
<div className="min-h-screen bg-[url('https://images.unsplash.com/photo-1510519138101-570d1dca3d66?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFyayUyMGRlc2t8ZW58MHx8MHx8fDA%3D')] bg-cover bg-center bg-no-repeat">      <TopSide></TopSide>
      <Center></Center>
      <Bottom></Bottom>
    </div>
  )
}

export default App
