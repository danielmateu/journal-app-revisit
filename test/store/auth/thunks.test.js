import { signInWithGoogle } from "../../../src/firebase/providers"
import { checkingCredentials, login } from "../../../store/auth/authSlice"
import { checkingAuthentication, startGoogleSignIn } from "../../../store/auth/thunks"
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


})