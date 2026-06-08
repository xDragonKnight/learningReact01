import React from 'react'


//Understanding Functions Basics
function onBtnClicked(val){
 var a = document.getElementById('Inputhuh');
 console.log(a.value);
 
}

function onInputChange(val)
{
  console.log(val);
  
}

function App() {
  return (
    <div className='bg-black h-screen w-screen flex flex-col'>
    <div className='flex justify-center pt-3'>
      <h1 className='text-white'>Understanding Functions</h1>
    </div>
     <div className='flex justify-center pt-4 gap-5'>
      <input type='text' id='Inputhuh' placeholder='Enter Text Here' onChange={function(elem){
        onBtnClicked(elem.target.value)
      }} className='text-black bg-white px-4 rounded-3xl py-1 hover:bg-gray-300 transition-colors duration-300 ease-in-out'></input>
      
      <button onClick={function(){
        onBtnClicked()
      }} className='text-black bg-white px-4 rounded-3xl py-1 hover:bg-gray-300 transition-colors duration-300 ease-in-out'>Go</button>
     </div>
    </div>
  )
}

export default App
