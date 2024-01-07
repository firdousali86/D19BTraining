import React, { useContext, createContext } from "react";


const LoginContextApi = createContext();

export function SetLoginContext({ children, isLogin, setIsLogin }) {
    value = {
        states: { isLogin },
        actions: { setIsLogin }
    }
    return <LoginContextApi.Provider value={value}>{children}</LoginContextApi.Provider>
}

export function getLoginContext() {
    return useContext(LoginContextApi);
}