import { useEffect, useState } from 'react';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase.init';

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

const useFireBase = () => {

    const [user, setUser] = useState({});

    useEffect(() => {

        onAuthStateChanged(auth, user => {

            setUser(user)
        })
    }, [])


    const signInWithGoogle = () => {

        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user
                setUser(user)
                console.log(user)
            })

            .catch(error => {
                console.error(error)
            })
    }


    const handleSignOut = () => {

        signOut(auth)
            .then(() => { })
    }

    return { user, signInWithGoogle, handleSignOut }
};

export default useFireBase;