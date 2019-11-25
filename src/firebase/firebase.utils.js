import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDi7LF4y1xgvE5wWjTFJJxjkjcY9Gr7Otk",
    authDomain: "clothing-app-b051d.firebaseapp.com",
    databaseURL: "https://clothing-app-b051d.firebaseio.com",
    projectId: "clothing-app-b051d",
    storageBucket: "clothing-app-b051d.appspot.com",
    messagingSenderId: "17111959550",
    appId: "1:17111959550:web:cad54fc378400b739822af",
    measurementId: "G-YN2S0SCB4X"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    
    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;