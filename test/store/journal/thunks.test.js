import { addNewEmptyNote } from "../../../store/journal/journalSlice";
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
        // expect(dispatch).toHaveBeenCalledWith(addNewEmptyNote({
        //     title: '',
        //     body: '',
        //     imageUrl: [],
        //     date: expect.any(Number)
        // }))
    })

})