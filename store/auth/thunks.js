
import { loginWithEmailAndPassword, logoutFirebase, registerUserWithEmailPassword, signInWithGoogle } from "../../src/firebase/providers";
import { loadNotes } from "../../src/helpers/loadNotes";
import { clearNotesLogout, setNotes } from "../journal/journalSlice";
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
        // console.log(result);
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

export const startLoginWithEmailAndPassword = ({ email, password }) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
        const resp = await loginWithEmailAndPassword({ email, password })
        // console.log(resp);

        if (!resp.ok) return dispatch(logout({ errorMessage: resp.errorMessage }));
        dispatch(login(resp))
    }
}

export const startLogout = () => {
    return async (dispatch) => {
        await logoutFirebase();
        dispatch(clearNotesLogout())
        dispatch(logout());
    }
}

export const startLoadingnotes = () => {
    return async (dispatch, getState) => {
        const {uid} = getState().auth;
        if(!uid) throw new Error('You need to be authenticated');
        // console.log(uid);

        const notes = await loadNotes(uid)
        dispatch(setNotes(notes))
    }
}
