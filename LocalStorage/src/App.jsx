import React from 'react'
import { useState } from 'react';

function App() {
  localStorage.setItem('user','Ahmad') //created a perma user
const [printuser, setprintuser] = useState('')
  const user = localStorage.getItem('user');
  //console.log('Created user first',user);
  
  localStorage.clear();
 // console.log('Deleted Everything');

  localStorage.setItem('details',{user:'Ahmad',age:'18',address:'Wah Cantt'}) //sets it as object in application
  
  const details = localStorage.getItem('details')
   // console.log(details); // we get Object object

    localStorage.clear();
  //console.log('Deleted Everything');

  localStorage.setItem('details',JSON.stringify({user:'Ahmad',age:'18',address:'Wah Cantt'})) //We stringify it.

   const detailsagain = localStorage.getItem('details')
    //console.log(detailsagain); // we get {"user":"Ahmad","age":"18","address":"Wah Cantt"}

    //let us make it an array again.

    const parsed = JSON.parse(localStorage.getItem('details'));
    console.log(parsed);// {user: 'Ahmad', age: '18', address: 'Wah Cantt'}address:"Wah Cantt"age:"18"user:"Ahmad"
  return (
    <div>
      <h1 className=''>Practicing Local Storage and Session Storage</h1>

      <h4>{printuser}</h4>
    </div>
    
  )
}

export default App
