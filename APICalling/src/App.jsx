import React from 'react'
import axios from 'axios'
import { useState } from 'react';
function App() {

const [data, setdata] = useState([])

  async function btnclick(){
  const response =  await axios.get('https://dogapi.dog/api/v2/facts?limit=3')
 // console.log(response);
  
  setdata(response.data.data)

  console.log(data);
  
  
}
  return (
    <div>
        <h1>Hey There.</h1>
        <h4>Button bellow will Call API</h4>
        <button onClick={()=>{
          btnclick()
        }}>API</button>

        {
         data.map(function(elem,idx){
          return (
            <h2 key={idx}>Fact {idx+1}, {elem.attributes}</h2>
          )
         })
        }
    </div>
  )
}

export default App
