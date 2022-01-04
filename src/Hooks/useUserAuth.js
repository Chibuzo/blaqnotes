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
            const __user = JSON.parse(localStorage.getItem(storageLabel));
            // check if it has expired
            // if still active, set state
            !user && setUser(__user);
            return true;
        } else {
            setUser({ IsLoggedIn: false });
        }
    }

    const login = async (email, password) => {
        try {
            const { data } = await post('user/login', { email, password }, 'POST', false);

            if (data && data.user && data.user.token) {
                localStorage.setItem(storageLabel, JSON.stringify(data.user));
                setUser({ ...data.user });
                return true;
            } else {
                setLoginError(data.message);
            }
        } catch (err) {
            setLoginError(err.response && err.response.data.error.message);
        }
    }

    const getLoggedInUser = () => {
        isLoggedIn();
        return user;
    }

    const logout = () => {
        localStorage.removeItem(storageLabel);
        setUser({ IsLoggedIn: false });
    }

    const signUp = async (user) => {
        try {
            await post('user/register', user, 'POST', false);
            return true;
        } catch (err) {
            setSignupError(err.response.data.error.message);
        }
    }

    const verifyEmail = async code => {
        const _code = code.split(".");
        const guid = _code[0];
        const email = _code[1];

        const result = await get(`Users/VerifyEmail/${email}/${guid}`, false);
        setVerification(result.Status);
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
        getLoggedInUser,
    }
};

export default useUserAuth;