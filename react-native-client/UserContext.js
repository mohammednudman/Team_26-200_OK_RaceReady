import React, { createContext, useState, useContext } from 'react';

// Create a UserContext
const UserContext = createContext();

// Create a custom hook to use the UserContext
export const useUserContext = () => {
  return useContext(UserContext);
};

// UserProvider component to wrap your app with
export const UserProvider = ({ children }) => {
  const [userId, setUserId] = useState(null); // Initialize with null or the initial user ID if available

  return (
    <UserContext.Provider value={{ userId, setUserId }}>
      {children}
    </UserContext.Provider>
  );
};
