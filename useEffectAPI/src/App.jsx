import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'

function App() {

  const [dataonsite, setdataonsite] = useState([])

  async function btnClick(){
  const {data} = await axios.get('https://meowfacts.herokuapp.com/?count=3')
  console.log(data);

  setdataonsite(data.data);

}

    useEffect(function(){
    btnClick()

    },[]);

  return (
    <div>
      <h1>API</h1>
      <button onClick={()=>{
        btnClick();
      }}>
        Click here to get more Facts</button>
        
      {dataonsite.map(function(elem,idx){
        return (
          <h4 key={idx}>{idx+1}. {elem}</h4>
        )
      })}

    </div>
  )
}

export default App
