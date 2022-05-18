import React, { useState } from "react";

import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import app from "../_app";

import styles from "../Login/login.module.scss";
import { useAuth } from "../../context/AuthProvider/useAuth";

const Login = () => {
    const user = useAuth();

    const handleLogin = () => {
        const provider = new GoogleAuthProvider();
        const auth = getAuth(app);

        signInWithPopup(auth, provider)
            .then((result) => {})
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;

                const credential = GoogleAuthProvider.credentialFromError(error);
            });
    };

    const handleLogout = () => {
        getAuth(app)
            .signOut()
            .then(() => {});
    };

    return (
        <div className={styles.container}>
            {user ? (
                <div>
                    <p>Welcome, {user.displayName}</p>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <button onClick={handleLogin}>Login</button>
            )}
        </div>
    );
};

export default Login;