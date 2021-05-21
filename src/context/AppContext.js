import { createContext, useState } from 'react';

export const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [filter, setFilter] = useState('');

    const changeFilter = (filter) => {
        setFilter(filter) 
        console.log(filter)
    }

    return (
        <AppContext.Provider 
            value={{
                filter, 
                changeFilter,
            }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider;