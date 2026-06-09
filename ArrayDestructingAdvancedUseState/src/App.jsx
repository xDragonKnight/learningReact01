import React, { useState } from 'react'

function App() {

  const [value, setvalue] = useState(0)

function btnClick()
{
  setvalue(value+1)
}

  const employee = ['Ahmad',18, 'Wah Cantt','Street 9']
  const [detailsemployee, setdetailsemployee] = useState(employee)



  const [name,age,address,...rest] = employee;
  console.log(employee);

function btnClick2()
{
  setdetailsemployee(prev=>[...detailsemployee,'React'])
  console.log(employee);
  
}



  const [vala, setfirstnum] = useState(5)
  const [valb, setsecondnum] = useState(10)

  function btnClick1(){
    setfirstnum(valb)
    setsecondnum(vala)
  }


  return (
    <div>


      <h1>Hey</h1>
      <h1>{value}</h1>
      <button onClick={function(){
btnClick();
      }}>Increase Value</button>
<p>_________________________________</p>
      <div className='employee-card'>
        <h4>Employee Name: {name}</h4> 
        <h4>Employee Age: {age}</h4>
        <h4>Employee Address: {address}</h4>
        <h4>More Details: {rest}</h4>  
      </div>
        <p>_________________________________</p>
        <br />
      <div className='swapping-variables'>
        <h2>Value of variable a is: {vala}</h2>
        <h2>Value of variable a was: {valb}</h2>
      <button onClick={function(){
btnClick1();
      }}>Swap</button>
      </div>

              <p>_________________________________</p>
        <br />
      <div className='appending-arrays'>
      <h1>{detailsemployee}</h1>
      <button onClick={function(){
btnClick2();
      }}>Add skill</button>
      </div>

    </div>
  )



}

export default App
