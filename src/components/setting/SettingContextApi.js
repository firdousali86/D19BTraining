import React, {createContext, useContext, useState} from 'react';
import {} from 'react-native';

const TestColorContext = createContext();

export function TestColorContextProvider({children}) {
  const [selectedColor, setSelectedColor] = useState();

  const SetColorAction = props => {
    setSelectedColor(props);
  };

  return (
    <TestColorContext.Provider value={{SetColorAction,selectedColor}}>
      {children}
    </TestColorContext.Provider>
  );
}

export function useTextContext() {
  return useContext(TestColorContext);
}
