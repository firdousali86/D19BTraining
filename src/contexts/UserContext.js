import React, {createContext, useContext} from 'react';

const UserContext = createContext();

export function UserContextProvider({children, userObject, setSampleText}) {
  const value = {
    state: {userObject},
    actions: {setSampleText},
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useUserContext() {
  return useContext(UserContext);
}
