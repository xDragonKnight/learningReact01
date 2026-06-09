import React from 'react'
import { useState } from 'react'



function App() {

  const [num, setnum] = useState(0)
  const [strin, setstrin] = useState('')
  function formSubmit(e){
    e.preventDefault(); //stops the default behavior for form tag
    setnum(10) //we can see the page being rendered on submitting form

    console.log('Form submitted and said ' + strin);
    setstrin(''); //reset input tag

  }

  return (
    <div>
      <h1>Gonna create a form</h1>
      <h2>{num}</h2>
    <form onSubmit={function(e){
      formSubmit(e);
    }}>
    <input type="text" placeholder='Write your thing mate :D' value={strin} onChange={(e)=>{
      setstrin(e.target.value);
      ;
    }} />
    <button>Submit</button> 
    </form>

    </div>
  )
}

export default App
