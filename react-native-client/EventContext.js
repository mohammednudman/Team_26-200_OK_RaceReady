import React, { createContext, useState, useContext } from 'react';

// Create a UserContext
const EventContext = createContext();

// Create a custom hook to use the UserContext
export const useEventContext = () => {
    return useContext(EventContext);
};

// UserProvider component to wrap your app with
export const EventProvider = ({ children }) => {
    const [amount, setAmount] = useState(0); // Initialize with null or the initial user ID if available
    const [eventId, setEventId] = useState(); // Initialize with null or the initial user ID if available

    return (
        <EventContext.Provider value={{ amount, setAmount, eventId, setEventId }}>
            {children}
        </EventContext.Provider>
    );
};
