import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";


const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = async () => {

    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        const { displayName, email, photoURL, uid } = result.user;

        return {
            ok: true,
            // User info
            displayName, email, photoURL, uid
        }
    } catch (error) {

        const errorCode = error.code;
        const errorMessage = error.message;

        return {
            ok: false,
            errorMessage,
        }
    }
}

export const registerUserWithEmailPassword = async ({ email, password, displayName }) => {
    try {
        // console.log({ email, password, displayName });
        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        // console.log(resp);
        const { uid, photoURL } = resp.user;
        // await user.updateProfile({ displayName });
        await updateProfile(FirebaseAuth.currentUser, { displayName });

        return {
            ok: true,
            uid: uid,
            displayName: user.displayName
        }

    } catch (error) {
        return { ok: false, errorMessage: error.message }
    }
}

export const loginWithEmailAndPassword = async ({ email, password }) => {

    try {
        const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password);
        // console.log(resp.user);
        const { uid, displayName, photoURL } = resp.user;

        return { ok: true, uid, displayName, photoURL }

    } catch (error) {
        return { ok: false, errorMessage: error.message }
    }
}

export const logoutFirebase = async () => {
    try {
        await FirebaseAuth.signOut();
        return { ok: true }
    } catch (error) {
        return { ok: false, errorMessage: error.message }
    }
}
