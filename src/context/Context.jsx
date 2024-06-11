import React from 'react';

// New Context.
const Context = React.createContext();

// Context Provider Component.
const ContextProvider = ({ children, value }) => {

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    );
};

export { Context, ContextProvider };