import { configureStore } from "@reduxjs/toolkit"
import { render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import { MemoryRouter } from "react-router-dom"
import LoginPage from "../../../src/auth/pages/LoginPage"
import { authSlice } from "../../../store/auth/authSlice"

const store = configureStore({
    reducer: {
        auth: authSlice.reducer
    },
    // preloadedState: {
    //     auth: {
    //         status: 'checking',
    //         errorMessage: null
    //     }
    // }
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
})