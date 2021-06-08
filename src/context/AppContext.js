import { createContext, useEffect, useState } from 'react';
import { db } from '../firebase'
import { useAuth } from '../hooks/useAuth';

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [books, setBooks] = useState([])
  const [filter, setFilter] = useState('');
  const [isPending, setIsPending] = useState(false);

  const { currentUser } = useAuth();

  const changeFilter = (filter) => {
      setFilter(filter) 
      console.log(filter)
  }

  const updateBooks = () => {
    setIsPending(true);
    db
    .collection(`users/${currentUser.uid}/books`)
    .orderBy('date', 'desc')
    .orderBy('timeStamp', 'desc')
    .get()
    .then(response => setBooks(response.docs))
    .then(() => setIsPending(false))
    .then(console.log('update appCnontext', books))
  }

// fetch data
  useEffect(() => {
    if (!currentUser) return 

    // setIsPending(true)
    // db
    // .collection(`users/${currentUser.uid}/books`)
    // .orderBy('date', 'desc')
    // .orderBy('timeStamp', 'desc')
    // // .orderBy('timeStamp')
    // .get()
    // .then(response => setBooks(response.docs))
    // .then(() => setIsPending(false))
    // .then(console.log('renderuje komponent appContext', books))
    const update = updateBooks()
    return update
    }, [currentUser])



    return (
      <AppContext.Provider 
        value={{
          books, 
          setBooks,
          updateBooks,
          filter, 
          changeFilter,
          isPending
        }}>
        {children}
      </AppContext.Provider>
    )
}

export default AppProvider;