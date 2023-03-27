import { addNewEmptyNote } from "./journalSlice";


export const startNewNote = () => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }
        const docRef = await db.collection(`${uid}/journal/notes`).add(newNote);
        dispatch(activeNote(docRef.id, newNote));
        dispatch(addNewEmptyNote(docRef.id, newNote));
    }
}