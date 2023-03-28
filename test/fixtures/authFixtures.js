export const initialState = {
    status: 'checking', // 'checking' | 'authenticated' | 'not-authenticated'
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,
};

export const authenticatedState = {
    status: 'authenticated',
    uid: '123ABC',
    email: 'demo@gmail.com',
    displayName: 'Demo User',
    photoURL: 'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png',
    errorMessage: null,
};

export const notAuthenticatedState = {
    status: 'not-authenticated',
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,
};

export const checkingCredentialsState = {
    status: 'checking',
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,
};

export const demoUser = {
    uid: '123ABC',
    email: 'demo@gmail.com',
    displayName: 'Demo User',
    photoURL: 'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png',
    errorMessage: null,
}


