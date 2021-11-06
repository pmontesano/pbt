import React, { createContext } from 'react';

export default ({ children, value }) => {
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const AppContext = createContext();
