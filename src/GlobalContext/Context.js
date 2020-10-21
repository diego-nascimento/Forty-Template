import React from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [HeaderState, setHeaderState] = React.useState(0);

  return (
    <GlobalContext.Provider
      value={{
        MenuPosition: HeaderState,
        setheaderState: setHeaderState,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
