import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        // counter: 10
        isSaving: true,
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
        addNewEmptyNote: (state, action) => { },
        setActiveNote: (state, action) => { },
        setNotes: (state, action) => { },
        updateNote: (state, action) => { },
        deleteNote: (state, action) => { },
        setSaving: (state, action) => { },
        setMessageSaved: (state, action) => { },
    }
});

// Action creators are generated for each case reducer function
export const {
    addNewEmptyNote,
    setActiveNote,
    setNotes,
    updateNote,
    deleteNote,
    setSaving,
    setMessageSaved,
} = journalSlice.actions;