import { registerUserWithEmailPassword, signInWithGoogle } from "../../src/firebase/providers";
import { checkingCredentials, login, logout } from "./authSlice";


export const checkingAuthentication = () => {

    return async (dispatch) => {
        dispatch(checkingCredentials());
    }
}

export const startGoogleSignIn = () => {
    return async (dispatch) => {

        dispatch(checkingCredentials());

        const result = await signInWithGoogle();
        console.log(result);
        if (!result.ok) return dispatch(logout(result.errorMessage));

        dispatch(login(result))

    }
}

export const startCreatingUserWithEmailAndPassword = ({ email, password, displayName }) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
        const resp = await registerUserWithEmailPassword({ email, password, displayName });
        // console.log(resp);

        if (!resp.ok) return dispatch(logout({ errorMessage: resp.errorMessage }));
        dispatch(login({ uid, displayName, email, photoURL }))
    }
}