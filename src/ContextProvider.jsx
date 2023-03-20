import React, { createContext, useState } from 'react';
const Context = createContext();
const ContextProvider = ({ children }) => {
    const [loggedUser, setLoggedUser] = useState('');
    function saveLoggedUser (username) {
        setLoggedUser(username);
    }
    console.log(loggedUser);
    return (
        <Context.Provider
            value={{
                loggedUser, saveLoggedUser
            }}
        >
            {children}
        </Context.Provider>
    );
};
export { Context };
export default ContextProvider;