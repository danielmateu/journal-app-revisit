import { addNewEmptyNote, deleteNoteById, savingNewNote, setActiveNote, setPhotosToActiveNote, setSaving, updatedNote } from "./journalSlice";
import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import { FiresbaseDB } from "../../src/firebase/config";
import { fileUpload } from "../../src/helpers/fileUpload";

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

// startUploadingFiles to cloudinary
export const startUploadingFiles = (files = []) => {
    return async (dispatch, getState) => {
        dispatch(setSaving());
        // console.log(files);

        // await fileUpload(files[0])
        // const fileUploadPromises = files.map(file => fileUpload(file));

        // const urls = await Promise.all(fileUploadPromises);
        // console.log(urls);

        const fileUploadPromises = []
        for (const file of files) {
            fileUploadPromises.push(fileUpload(file));
        }
        const photoUrls = await Promise.all(fileUploadPromises);
        console.log(photoUrls);

        dispatch(setPhotosToActiveNote(photoUrls))

    }
}

export const startDeletingNote = (id) => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        const { active: note } = getState().journal;

        const docRef = doc(FiresbaseDB, `${uid}/journal/notes/${note.id}`);
        await deleteDoc(docRef);

        dispatch(deleteNoteById(note.id));
        
    }
}


