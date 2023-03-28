import { authSlice } from "../../../store/auth/authSlice"
import { initialState } from "../../fixtures/authFixtures";

describe('Tests sobre authSlice', () => {
    test('Debe regresar el estado inicial y llamarse "auth"', () => {
        
        const state = authSlice.reducer(initialState, {})
        expect (authSlice.name).toBe('auth');
        expect(state).toEqual(initialState);

    })
})