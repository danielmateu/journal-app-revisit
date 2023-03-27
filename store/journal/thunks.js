import { addNewEmptyNote } from "./journalSlice";
import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FiresbaseDB } from "../../src/firebase/config";

export const startNewNote = () => {
    return async (dispatch, getState) => {

        // console.log('Start new note');
        // console.log(getState());

        const { uid } = getState().auth;
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }
        
        const newDoc = doc(collection(FiresbaseDB, `${uid}/journal/notes`));
        await setDoc(newDoc, newNote);

        // console.log({ newDoc, setDocResp});
        // dispatch(activeNote(docRef.id, newNote));
        // dispatch(addNewEmptyNote(docRef.id, newNote));
    }
}