import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';



const auth = getAuth(app)

const Home = () => {

    const [user] = useAuthState(auth)
    return (
        <div>
            <h2>this is home</h2>
            <h1>the malik of Home : {user ? user.displayName : 'Empty Home'} </h1>
        </div>
    );
};

export default Home;