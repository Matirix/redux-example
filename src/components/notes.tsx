import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {AppDispatch, RootState } from "../state/store"
import { addNote, removeNote } from '../state/notes/notesSlice';

interface Note {
    _id: number,
    author: String,
    desc: String,
}

const Notes = () => {
    const notes = useSelector((state: RootState) => state.notes.notes)
    const dispatch = useDispatch<AppDispatch>();

    const [note, setNote] = useState({
        _id: 0,
        author: "",
        desc: "",
    })

    const handleSubmit = () => {
        let newNote: Note = {
            _id: notes.length,
            author: note.author,
            desc: note.desc
        }
        dispatch(addNote(newNote))
    }
    

  return (
    <div>
        <h2>Notes</h2>
        <div>
            {notes && notes.map(note => (
                <div>
                    <h3>{note._id} : {note.author}</h3>
                    <p>{note.desc}</p>
                </div>
            ))}

        </div>
        <br />
        <div>
            <h3>Add a new Note</h3>
            <p>Author</p>
            <input onChange={(e) => setNote(prevNote => ({...prevNote, desc: e.target.value}))}></input>
            <p>Desc</p>
            <input onChange={(e) => setNote(prevNote => ({...prevNote, author: e.target.value}))}></input>
        </div>
            <button onClick={handleSubmit}></button>

        <div>
            

        </div>
    </div>
  )
}

export default Notes