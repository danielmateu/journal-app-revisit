import { addNewEmptyNote, savingNewNote, setActiveNote, setSaving, updatedNote } from "./journalSlice";
import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FiresbaseDB } from "../../src/firebase/config";

export const startNewNote = () => {
    return async (dispatch, getState) => {
        // console.log('Start new note');
        // console.log(getState());
        dispatch(savingNewNote());

        const { uid } = getState().auth;
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }

        const newDoc = doc(collection(FiresbaseDB, `${uid}/journal/notes`));
        await setDoc(newDoc, newNote);
        newNote.id = newDoc.id;
        // console.log({ newDoc, setDocResp});
        // dispatch(activeNote(docRef.id, newNote));
        dispatch(addNewEmptyNote(newNote));
        dispatch(setActiveNote(newNote));

    }
}

export const startSaveNote = (note) => {
    return async (dispatch, getState) => {

        dispatch(setSaving())

        const { uid } = getState().auth;
        const { active: note } = getState().journal;

        const noteToFirestore = { ...note };
        delete noteToFirestore.id;
        // console.log(noteToFirestore);
        const docRef = doc(FiresbaseDB, `${uid}/journal/notes/${note.id}`);

        await setDoc(docRef, noteToFirestore, {merge: true});

        dispatch(updatedNote(note))
    }
}