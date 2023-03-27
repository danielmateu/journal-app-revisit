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
        },
        setNotes: (state, action) => {
            state.notes = action.payload;
        },
        updateNote: (state, action) => { },
        deleteNote: (state, action) => { },
        setSaving: (state, action) => { },
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
    setMessageSaved,
} = journalSlice.actions;