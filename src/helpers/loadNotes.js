import { collection, getDocs } from "firebase/firestore/lite";
import { FiresbaseDB } from "../firebase/config";

export const loadNotes = async (uid) => {

    if (!uid) throw new Error('You need to be authenticated');

    const collectionRef = collection(FiresbaseDB, `${uid}/journal/notes`)
    const docs = await getDocs(collectionRef);

    // console.log(docs);
    const notes = [];
    docs.forEach(doc => {
        // console.log(doc.data());
        notes.push({
            id: doc.id,
            ...doc.data()
        })
    })

    // console.log(notes);
    return notes;
}

