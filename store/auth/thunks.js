import { checkingCredentials } from "./authSlice";


export const checkingAuthentication = (email, password) => {

    return async (dispatch) => {
        dispatch(checkingCredentials());
    }
}

export const startGoogleSignIn = () => {
    return (dispatch) => {
        console.log('startGoogleSignIn');
        dispatch(checkingCredentials());
        // firebase.auth().signInWithPopup(googleAuthProvider)
        //     .then(({ user }) => {
        //         dispatch(login({
        //             uid: user.uid,
        //             email: user.email,
        //             displayName: user.displayName,
        //             photoURL: user.photoURL,
        //         }));
        //     });
    }
}