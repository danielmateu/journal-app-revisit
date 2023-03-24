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

export const startCreatingUserWithEmailAndPassword = ({email, password, displayName}) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
        const result = await registerUserWithEmailPassword({email, password, displayName});
        if (!result.ok) return dispatch(logout(result.errorMessage));
        dispatch(login(result))
    }
}