import React, {createContext, useContext} from 'react';

const UserContext = createContext();

export function UserContextProvider({
  children,
  userObject,
  setSampleText,
  isUserLoggedIn,
  setIsUserLoggedIn,
}) {
  const value = {
    state: {userObject, isUserLoggedIn},
    actions: {setSampleText, setIsUserLoggedIn},
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useUserContext() {
  return useContext(UserContext);
}
