import { createContext, useEffect, useState } from 'react';
import { db } from '../firebase'
import { useAuth } from '../hooks/useAuth';

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [books, setBooks] = useState([])
  const [filter, setFilter] = useState('');

  const { currentUser } = useAuth();

  const changeFilter = (filter) => {
      setFilter(filter) 
      console.log(filter)
  }

  const updateBooks = () => {
    db
    .collection(`users/${currentUser.uid}/books`)
    .orderBy('timeStamp')
    .get()
    .then(response => setBooks(response.docs))
    .then(console.log('update appCnontext', books))
  }

// fetch data
  useEffect(() => {
    db
    .collection(`users/${currentUser.uid}/books`)
    .orderBy('timeStamp')
    .get()
    .then(response => setBooks(response.docs))
    .then(console.log('renderuje komponent appContext', books))
    }, [])



    return (
      <AppContext.Provider 
        value={{
          books, 
          setBooks,
          updateBooks,
          filter, 
          changeFilter,
        }}>
        {children}
      </AppContext.Provider>
    )
}

export default AppProvider;