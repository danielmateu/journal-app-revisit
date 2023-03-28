import { loginWithEmailAndPassword, logoutFirebase, signInWithGoogle } from "../../../src/firebase/providers"
import { checkingCredentials, login, logout } from "../../../store/auth/authSlice"
import { checkingAuthentication, startGoogleSignIn, startLoginWithEmailAndPassword, startLogout } from "../../../store/auth/thunks"
import { clearNotesLogout } from "../../../store/journal/journalSlice"
import { demoUser } from "../../fixtures/authFixtures"


jest.mock('../../../src/firebase/providers')

describe('Pruebas en AuthThunks', () => {

    const dispatch = jest.fn();
    beforeEach(() => {
        dispatch.mockClear();
    })

    test('debe invocar el checkingAuthentication', async () => {

        await checkingAuthentication()(dispatch)
        expect(dispatch).toHaveBeenCalledWith(checkingCredentials())

    })

    test('startGoogleSignIn debe de llamar ckecingCredentials y loging', async () => {

        const loginData = {
            ok: true,
            ...demoUser
        }

        await signInWithGoogle.mockResolvedValue(loginData)
        await startGoogleSignIn()(dispatch)

        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
        expect(dispatch).toHaveBeenCalledWith(login(loginData));
    })

    test('startGoogleSignIn debe de llamar checkingCredentials y logout - Error', async () => {

        const loginData = { ok: false, errorMessage: 'Error en el login' }
        await signInWithGoogle.mockResolvedValue(loginData)

        await startGoogleSignIn()(dispatch)

        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
        expect(dispatch).toHaveBeenCalledWith(logout(loginData.errorMessage));

    })

    test('startLoginWithEmailAndPassword debe de llamar checkinCredentials y login - Éxito ', async () => {

        const loginData = {
            ok: true,
            ...demoUser
        }

        const formData = {
            email: demoUser.email,
            password: demoUser.password
        }

        await loginWithEmailAndPassword.mockResolvedValue(loginData)
        await startLoginWithEmailAndPassword(formData)(dispatch)

        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
        expect(dispatch).toHaveBeenCalledWith(login(loginData));
    })

    test('startLoginWithEmailAndPassword debe de llamar checkinCredentials y logout - Error ', async () => {

        const loginData = {
            ok: false,
            errorMessage: 'Error en el login'
        }

        const formData = { 
            email: demoUser.email,
            password: demoUser.password
        }

        await loginWithEmailAndPassword.mockResolvedValue(loginData)
        await startLoginWithEmailAndPassword(formData)(dispatch)

        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
        // expect(dispatch).toHaveBeenCalledWith(logout(loginData.errorMessage));

    })

    test('startLogout debe llamar logoutFirebase, clearNotes y logout', async() => {

        await startLogout()(dispatch)

        expect(logoutFirebase).toHaveBeenCalled();
        expect(dispatch).toHaveBeenCalledWith(clearNotesLogout());
        expect(dispatch).toHaveBeenCalledWith(logout());

    })

})