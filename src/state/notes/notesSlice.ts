import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"

interface Note {
    _id: number,
    author: String,
    desc: String,
}
interface NotesState {
    notes: Note[]
}

const initialState: NotesState = {
    notes: [],
}

const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        addNote: (state, action: PayloadAction<Note>) => {
            state.notes.push(action.payload)
        },
        removeNote: (state, action: PayloadAction<Note>) => {
            state.notes.filter(note => note._id !== action.payload._id)
        }
    }

})

export const {addNote, removeNote} = notesSlice.actions;


export default notesSlice.reducer;