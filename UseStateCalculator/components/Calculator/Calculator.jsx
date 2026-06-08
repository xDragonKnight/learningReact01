import React from 'react'
import { useState } from 'react'
function Calculator() {
    const [num, setnum] = useState('')
const [previousnum, setpreviousnum] = useState('')

    function btnClick(value){
        if(value === '=')
        {            
            setpreviousnum(num);
        try{
            const formatexpression = num.replace(/x/g,'*');

            const result = eval(formatexpression);

            setnum(String(result));
        }
        catch(error){
            {
                setnum('Error');
            }
        }
        }
        else if(value === 'C')
        {
         setnum('');
        }
        else {
            if (num === '0')
            {
                setnum(value);
            }
            else{
                setnum(num+value);
            }
        }
    }

  return (
    <div className='text-white flex flex-col items-center'>
      <div className='mt-5 flex gap-2 items-center'>
        <button onClick={function(){btnClick('C')}} className='bg-gray-800 w-20 py-2 rounded-4xl hover:bg-gray-500 transition-colors duration-300 ease-in-out'>C</button>
        <input type="text" placeholder='0'  value={num} readOnly className='bg-gray-700 p-2 w-62 px-5  rounded-4xl appearance-none text-right'/>
      </div>
      <p className='mt-3'>History: {previousnum}</p>
    <div className='mt-4 flex gap-1'>
         <button onClick={function(){btnClick('1')}} className='bg-gray-800 w-20 py-2 rounded-4xl hover:bg-gray-500 transition-colors duration-300 ease-in-out'>1</button>
        <button onClick={function(){btnClick('2')}} className='bg-gray-800 w-20 py-2 rounded-4xl hover:bg-gray-500 transition-colors duration-300 ease-in-out '>2</button>
        <button onClick={function(){btnClick('3')}} className='bg-gray-800 w-20 py-2 rounded-4xl  hover:bg-gray-500 transition-colors duration-300 ease-in-out'>3</button>
         <button onClick={function(){btnClick('/')}} className='bg-gray-800 w-20 py-2 rounded-4xl  hover:bg-gray-500 transition-colors duration-300 ease-in-out'>/</button>
      </div>
    <div className='mt-2 flex gap-1'>
         <button onClick={function(){btnClick('4')}} className='bg-gray-800 w-20 py-2 rounded-4xl  hover:bg-gray-500 transition-colors duration-300 ease-in-out'>4</button>
        <button onClick={function(){btnClick('5')}} className='bg-gray-800 w-20 py-2 rounded-4xl  hover:bg-gray-500 transition-colors duration-300 ease-in-out'>5</button>
        <button onClick={function(){btnClick('6')}} className='bg-gray-800 w-20 py-2 rounded-4xl  hover:bg-gray-500 transition-colors duration-300 ease-in-out'>6</button>
        <button onClick={function(){btnClick('x')}} className='bg-gray-800 w-20 py-2 rounded-4xl  hover:bg-gray-500 transition-colors duration-300 ease-in-out'>x</button>

      </div>
          <div className='mt-2 flex gap-1'>
         <button onClick={function(){btnClick('7')}} className='bg-gray-800 w-20 py-2 rounded-4xl  hover:bg-gray-500 transition-colors duration-300 ease-in-out'>7</button>
        <button onClick={function(){btnClick('8')}} className='bg-gray-800 w-20 py-2 rounded-4xl  hover:bg-gray-500 transition-colors duration-300 ease-in-out'>8</button>
        <button onClick={function(){btnClick('9')}} className='bg-gray-800 w-20 py-2 rounded-4xl hover:bg-gray-500 transition-colors duration-300 ease-in-out'>9</button>
        <button onClick={function(){btnClick('-')}} className='bg-gray-800 w-20 py-2 rounded-4xl  hover:bg-gray-500 transition-colors duration-300 ease-in-out'>-</button>
      </div>

     <div className='mt-2 flex gap-1'>
         <button onClick={function(){btnClick('0')}} className='bg-gray-800 w-20 py-2 rounded-4xl hover:bg-gray-500 transition-colors duration-300 ease-in-out'>0</button>
        <button onClick={function(){btnClick('.')}} className='bg-gray-800 w-20 py-2 rounded-4xl  hover:bg-gray-500 transition-colors duration-300 ease-in-out'>.</button>
        <button onClick={function(){btnClick('=')}} className='bg-gray-800 w-20 py-2 rounded-4xl  hover:bg-gray-500 transition-colors duration-300 ease-in-out'>=</button>
        <button onClick={function(){btnClick('+')}} className='bg-gray-800 w-20 py-2 rounded-4xl  hover:bg-gray-500 transition-colors duration-300 ease-in-out'>+</button>
      </div>
    </div>
  )
}

export default Calculator
