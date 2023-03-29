import { configureStore } from "@reduxjs/toolkit"
import { fireEvent, render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import { MemoryRouter } from "react-router-dom"
import LoginPage from "../../../src/auth/pages/LoginPage"
import { authSlice } from "../../../store/auth/authSlice"
import { startGoogleSignIn } from "../../../store/auth/thunks"
import { notAuthenticatedState } from "../../fixtures/authFixtures"


const mockStartGoogleSignIn = jest.fn()
jest.mock('../../../store/auth/thunks', () => ({
    startGoogleSignIn: () => mockStartGoogleSignIn
}))

const store = configureStore({
    reducer: {
        auth: authSlice.reducer
    },
    preloadedState: {
        auth: notAuthenticatedState
    }
})
describe('Pruebas en Login Page', () => {

    test('Debe de mostrarse correctamente', () => {
        render(
            <Provider
                store={store}
            >
                <MemoryRouter>
                    <LoginPage />
                </MemoryRouter>
            </Provider>

        )
        // screen.debug()

        expect(screen.getAllByText('Login').length).toBeGreaterThanOrEqual(1)
    })

    test('EL boton de google debe de llamar el startGoogleSignIn()', () => {
        render(
            <Provider
                store={store}
            >
                <MemoryRouter>
                    <LoginPage />
                </MemoryRouter>
            </Provider>
        )
        // console.log(store.getState());
        // screen.debug()
        // Recuperar el boton de google
        const googleButton = screen.getByLabelText('google-btn')
        // Simular el click
        fireEvent.click(googleButton)
        // Verificar que se haya llamado la acción
        expect(mockStartGoogleSignIn).toHaveBeenCalled()

        
    })
})