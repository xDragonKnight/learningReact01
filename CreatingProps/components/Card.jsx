import React from 'react'

function Card(props) {

    console.log(props.name,props.age)   
  return (
    <div className='test'>
        <img src={props.imgsrc} alt='Profile Picture'></img>
      <h1>{props.name}</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, iusto?</p>

      <p>Age: {props.age}</p>
      <button>Update</button>
    </div>
    ); 
    
  
}

export default Card
