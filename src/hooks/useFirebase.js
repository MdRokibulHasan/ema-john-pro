import { useState, useEffect } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.init';
initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    // console.log(user);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)

    }
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }
    useEffect(() => {
        onAuthStateChanged(auth, () => {
            if (user) {
                setUser(user)
            }
        });
    }, [])

    return {
        user,
        signInWithGoogle,

        logOut

    }


}
export default useFirebase;