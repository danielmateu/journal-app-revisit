import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        // counter: 10
        isSaving: false,
        messageSaved: '',
        notes: [],
        active: null,
        // active : {
        //     id: 'ABC123',
        //     date: 1234567890,
        //     title: '',
        //     body: '',
        //     imageUrl: [],   // Array of strings
        // }

    },
    reducers: {
        savingNewNote: (state, action) => {
            state.isSaving = true;
        },
        addNewEmptyNote: (state, action) => {
            state.notes.push(action.payload);
            state.isSaving = false
        },
        setActiveNote: (state, action) => {
            state.active = action.payload;
            state.messageSaved = '';
        },
        setNotes: (state, action) => {
            state.notes = action.payload;
        },
        setSaving: (state, action) => { 
            state.isSaving = true;
            state.messageSaved = '';
            // TODO: Mensaje de error
        },
        updatedNote: (state, action) => { // payload: note
            state.isSaving = false;
            state.notes = state.notes.map(note => note.id === action.payload.id ? action.payload : note);

            state.messageSaved = `${action.payload.title} - actualizado correctamente`;
        },
        deleteNote: (state, action) => { },
        setMessageSaved: (state, action) => { },
    }
});

// Action creators are generated for each case reducer function
export const {
    savingNewNote,
    addNewEmptyNote,
    setActiveNote,
    setNotes,
    updateNote,
    deleteNote,
    setSaving,
    updatedNote,
    setMessageSaved,
} = journalSlice.actions;