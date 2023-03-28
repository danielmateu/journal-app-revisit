import { collection, deleteDoc, getDocs } from "firebase/firestore/lite";
import { FiresbaseDB } from "../../../src/firebase/config";
import { addNewEmptyNote, savingNewNote, setActiveNote } from "../../../store/journal/journalSlice";
import { startNewNote } from "../../../store/journal/thunks";

describe('Pruebas sobre journal thunks', () => {

    const dispatch = jest.fn();
    const getState = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
        // dispatch.mockClear();
        // getState.mockClear();
    })

    test('startNewNote debe de crear una nueva nota en blanco', async () => {

        const uid = '123';
        getState.mockReturnValue({ auth: { uid: uid } })

        await startNewNote()(dispatch, getState);
        expect(dispatch).toHaveBeenCalledWith(savingNewNote());
        expect(dispatch).toHaveBeenCalledWith(addNewEmptyNote({
            title: '',
            body: '',
            imageUrl: [],
            date: expect.any(Number),
            id: expect.any(String)
        }));
        expect(dispatch).toHaveBeenCalledWith(setActiveNote({
            title: '',
            body: '',
            imageUrl: [],
            date: expect.any(Number),
            id: expect.any(String)
        }));

        // Borrar de firebase
        const collectionRef = collection(FiresbaseDB, `${uid}/journal/notes`);
        const docs = await getDocs(collectionRef);
        // console.log(docs);
        const deletePromises = [];
        docs.forEach(doc => {
            deletePromises.push(deleteDoc(doc.ref));
        });

        await Promise.all(deletePromises);

    })

})