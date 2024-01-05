import React, { createContext, useContext } from 'react'

const UserContext = createContext({ state: {}, actions: {} });

export function UserContextProvider({ children, userObject }) {
    const value = {
        state: { userObject },
        actions: {},
    }
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>

}
export function useUserContext() {
    return useContext(UserContext);
}