import React, { createContext, useState, useContext } from 'react';

const MarathonContext = createContext();

export const useMarathonContext = () => {
  return useContext(MarathonContext);
};

export const MarathonProvider = ({ children }) => {
  const [run, setRun] = useState(false);

  return (
    <MarathonContext.Provider value={{ run, setRun }}>
      {children}
    </MarathonContext.Provider>
  );
};
