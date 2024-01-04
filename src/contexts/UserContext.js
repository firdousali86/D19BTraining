import React, {createContext, useContext} from 'react';

const UserContext = createContext();

export function UserContextProvider({children, userObject}) {
  //   const value = {
  //     state: {userObject},
  //     actions: {},
  //   };

  return (
    <UserContext.Provider value={userObject}>{children}</UserContext.Provider>
  );
}

export function useUserContext() {
  return useContext(UserContext);
}
