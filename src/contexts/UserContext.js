import React, { createContext, useContext, useState } from 'react'

const UserContext = createContext({ state: {}, actions: {} });

export function UserContextProvider({ children, userObject }) {

    const [isThemEnabled, setIsThemEnabled] = useState(true);
    const [isArticleEnabled, setIsArticleEnabled] = useState(true);

    const toggleThemeSwitch = () => {
        setIsThemEnabled(previousState => !previousState);
    };
    const toggleArticleSwitch = () => {
        setIsArticleEnabled(previousState => !previousState);
    };

    const value = {
        state: { userObject, isArticleEnabled, isThemEnabled },
        actions: { toggleThemeSwitch, toggleArticleSwitch },
    }
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>

}
export function useUserContext() {
    return useContext(UserContext);
}