import React, { createContext, useContext, useState } from "react";

const UserContext = createContext({ state: {}, actions: {} })

export function UserContextProvider({ children }) {
    
    use [bgColor, setBgColor]=useState();


    const value = {
        state: { username },
        actions: { setUsername }
    }

    return <UserContext.Provider>{children}</UserContext.Provider>
}

export function useUserContext() {
    return useContext(UserContext);
}