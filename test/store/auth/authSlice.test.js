import { authSlice, login, logout } from "../../../store/auth/authSlice"
import { authenticatedState, demoUser, initialState, notAuthenticatedState } from "../../fixtures/authFixtures";

describe('Tests sobre authSlice', () => {
    test('Debe regresar el estado inicial y llamarse "auth"', () => {

        const state = authSlice.reducer(initialState, {})
        expect(authSlice.name).toBe('auth');
        expect(state).toEqual(initialState);

    })

    test('Debe de realizar la autenticación', () => {

        // console.log(login(demoUser));

        const state = authSlice.reducer(initialState, login(demoUser))
        // console.log(state);
        expect(state).toEqual(authenticatedState)
    })

    test('Debe de realizar el logout', () => {

        const state = authSlice.reducer(authenticatedState, logout())
        console.log(state);
        expect(state).toEqual({
            status: 'not-authenticated',
            uid: null,
            email: null,
            displayName: null,
            photoURL: null,
            errorMessage: undefined
        })
    })

    test('Debe realizar el logout y mostrar un mensaje de error', () => {
        const state = authSlice.reducer(authenticatedState, logout({ errorMessage: 'Error en el servidor' }))
        expect(state).toEqual({ ...notAuthenticatedState, errorMessage: 'Error en el servidor' })
    })
})