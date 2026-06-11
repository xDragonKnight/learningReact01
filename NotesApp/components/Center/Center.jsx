import React, { useState } from 'react'
import { CirclePlus, Check, X } from 'lucide-react'

function Center() {

    const [createmodal, setcreatemodal] = useState(false)

    const [tittle, settittle] = useState('')

    const [notes, setnotes] = useState([
        {
            id: 1,
            tittle: 'Example Note',
            contentNote: 'Example Text'
        }
    ])

    const [selectedNoteId, setSelectedNoteId] = useState(1)

    const selectedNote = notes.find(
        note => note.id === selectedNoteId
    )

    function createNote() {

        if (tittle.trim() === '') return

        const newNote = {
            id: Date.now(),
            tittle: tittle,
            contentNote: ''
        }

        setnotes([...notes, newNote])

        setSelectedNoteId(newNote.id)

        settittle('')

        setcreatemodal(false)
    }

    function updateNoteContent(value) {

        setnotes(
            notes.map(note =>
                note.id === selectedNoteId
                    ? {
                        ...note,
                        contentNote: value
                    }
                    : note
            )
        )
    }

    return (

        <div className='flex flex-row gap-5 h-[calc(100vh-102px)]'>

            <div className='px-5 flex flex-col gap-2 w-1/4 items-center border-r'>

                <button
                    onClick={() => {
                        setcreatemodal(true)
                    }}
                    className='active:scale-y-95 invisible lg:visible'
                >
                    <CirclePlus size={44} color="#ffffff" />
                </button>

                {createmodal && (

                    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/10 backdrop-blur-xs'>

                        <div className='bg-gray-900 p-6 rounded-lg shadow-xl border border-gray-800'>

                            <div className='flex flex-col items-center'>

                                <h1 className='text-white text-xl mb-4'>
                                    Create New Note
                                </h1>

                                <input
                                    type="text"
                                    placeholder='Enter title'
                                    value={tittle}
                                    onChange={(e) => {
                                        settittle(e.target.value)
                                    }}
                                    className='p-2 border-2 rounded-2xl'
                                />

                                <div className='flex gap-5 p-3'>

                                    <button
                                        onClick={createNote}
                                        className='flex text-sm text-gray-400 hover:text-white underline cursor-pointer'
                                    >
                                        <Check />
                                        Create
                                    </button>

                                    <button
                                        onClick={() => setcreatemodal(false)}
                                        className='flex text-sm text-gray-400 hover:text-white underline cursor-pointer'
                                    >
                                        <X />
                                        Close
                                    </button>

                                </div>

                            </div>

                        </div>

                    </div>
                )}

                {/* Notes List */}
                {
                    notes.map((note) => (

                        <button
                            key={note.id}
                            onClick={() => setSelectedNoteId(note.id)}
                            className={`px-5 py-1 rounded font-thin leading-snug w-full
                                
                                ${selectedNoteId === note.id
                                    ? 'bg-blue-700 text-white'
                                    : 'bg-gray-800 text-white'
                                }
                            `}
                        >
                            {note.tittle}
                        </button>

                    ))
                }

            </div>
            <div className='bg-gray-950 grow h-full'>

                <textarea
                    placeholder='Type here...'
                    value={selectedNote?.contentNote || ''}
                    onChange={(e) => {
                        updateNoteContent(e.target.value)
                    }}
                    className='w-full h-full p-3 resize-none scrollbar-thin scrollbar-thumb-blue-900 outline-blue-900'
                />

            </div>

        </div>
    )
}

export default Center