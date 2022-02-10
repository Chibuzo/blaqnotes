import { useState } from "react";

import { get, post } from "../Helpers/APIRequest";

const useUserAuth = (userType = 'user') => {
    const storageLabel = `${userType}Data`;
    const [user, setUser] = useState();
    const [loginError, setLoginError] = useState();
    const [signupError, setSignupError] = useState();
    const [verificationStatus, setVerification] = useState();

    const isLoggedIn = () => {
        if (localStorage.getItem(storageLabel) !== null) {
            let __user = {};
            if (!user) {
                __user = JSON.parse(localStorage.getItem(storageLabel));
                // check if it has expired
                // if still active, set state
                setUser(__user);
                return __user;
            }
            return user;
        } else {
            setUser({ IsLoggedIn: false });
            return false;
        }
    }

    const login = async (email, password) => {
        try {
            const data = await post('user/login', { email, password }, 'POST', false);
            console.log({ data })
            if (data && data.user && data.user.token) {
                localStorage.setItem(storageLabel, JSON.stringify(data.user));
                setUser({ ...data.user });
                return true;
            } else {
                setLoginError(data.message);
            }
        } catch (err) {
            setLoginError(err.message);
        }
    }

    // const getLoggedInUser = () => {
    //     isLoggedIn();
    //     return user;
    // }

    const logout = () => {
        localStorage.removeItem(storageLabel);
        setUser({ IsLoggedIn: false });
    }

    const signUp = async (user) => {
        try {
            await post('user/register', user, 'POST', false);
            return true;
        } catch (err) {
            console.log(err)
            setSignupError(err.message);
        }
    }

    const verifyEmail = async (email_hash, hash_string) => {
        try {
            const { user } = await post(`user/activate/`, { email_hash, hash_string }, 'PUT', false);
            return { status: true, user };
        } catch (err) {
            return { status: false, message: err.message };
        }
    }

    return {
        user,
        isLoggedIn,
        login,
        loginError,
        logout,
        signUp,
        signupError,
        verifyEmail,
        verificationStatus,
        // getLoggedInUser,
    }
};

export default useUserAuth;