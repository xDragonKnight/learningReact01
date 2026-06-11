import React from 'react'
import { useState } from 'react'

function App() {

  const [noteTitle, setnoteTitle] = useState('')
  const [noteDetail, setnoteDetail] = useState('')

  const [task, settask] = useState([])
  
function submitHandler(e){
  e.preventDefault();

  const copyOfTask = [...task];
  copyOfTask.push({noteTitle,noteDetail})
  settask(copyOfTask);
  console.log(task);
  


  setnoteTitle('')
  setnoteDetail('')

}

function deleteNote(NoteId){
  const copyOfTask = [...task]
  copyOfTask.splice(NoteId,1);

  settask(copyOfTask)
}

  function editNote(NoteId) {

    setnoteTitle(task[NoteId].noteTitle)
    setnoteDetail(task[NoteId].noteDetail)

    deleteNote(NoteId)
  }

  return (

    <div className='flex bg-black h-screen w-screen'>
      <form className='flex flex-col p-5 gap-2 text-white'>
        <h1>Enter Note Title</h1>
        <input type="text" placeholder='Enter Tittle' value={noteTitle} onChange={(e)=>{
          setnoteTitle(e.target.value);
        }} className='text-white bg-gray-800 px-3 py-1 rounded' />

        <h1>Enter Note Detail</h1>
        <textarea type="text" placeholder='Write here...' value={noteDetail} onChange={(e)=>{
          setnoteDetail(e.target.value);
        }} className='text-white bg-gray-800 px-3 py-1 rounded h-full resize-none' />
        <button onClick={(e)=>{submitHandler(e)}}className='text-white border p-1 bg-blue-950 rounded hover:bg-blue-900 transition-colors duration-200 ease-in-out active:bg-blue-600'>Create a Note</button>
      </form>
      

      <div className='flex flex-wrap p-5 gap-2 text-white h-full w-full'>
        {task.map(function(elem,idx){
          return (
                  <div key={idx} className='h-1/2 w-72 bg-blue-950 rounded'>
        <div className='flex justify-center p-2'>
        <h1 className='text-2xl font-light leading-snug tracking-wider'>Tittle: {elem.noteTitle}</h1>
        </div>
        <textarea readOnly value={elem.noteDetail} className='p-2 h-[calc(100%-100px)] w-full font-thin scrollbar-thumb-amber-700 resize-none'></textarea>
        
        <div className='flex justify-center gap-2 mt-1'>
          <button onClick={()=>{editNote(idx)}}className='text-white border p-1 bg-green-600 rounded hover:bg-green-950 transition-colors duration-200 ease-in-out active:bg-green-500 px-5'>Edit</button>

           <button onClick={()=>{deleteNote(idx)}}className='text-white border p-1 bg-red-600 rounded hover:bg-red-950 transition-colors duration-200 ease-in-out active:bg-red-500 px-5'>Delete</button>
           
           </div>
        </div>
          )
        })}

      </div>
    </div>
  )
}

export default App
