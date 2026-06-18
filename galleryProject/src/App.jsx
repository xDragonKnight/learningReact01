
  import Navbar from './components/NavBar/Navbar'
import Center from './components/Center/Center'

  const App = () => {

    return (
      <div className='h-screen w-screen bg-black overflow-auto scrollbar-thin scrollbar-thumb-cyan-500'>
        <Navbar></Navbar>
        <Center></Center>

        
      </div>
    )
  }

  export default App