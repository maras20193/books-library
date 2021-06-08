import { Container, Grid} from '@material-ui/core';
import React, { useState, useEffect, useContext } from 'react';
import Masonry from 'react-masonry-css';

import { AppContext } from '../context/AppContext'

import NoteCard from '../components/NoteCard';
import Loader from '../components/Loader';
import { useData } from '../hooks/useData'
import { db } from '../firebase';
import { useAuth } from '../hooks/useAuth';

const Notes = () => {
  const { books, isPending, filter} = useData();
  const { currentUser } = useAuth();

  const  filterBooks = filter && books
    ? [...books].filter(book => book.data().primaryCategory === filter)
    : [...books];

  return (
    <>
    {isPending && <Loader/>}
    {currentUser && 
        <Container>
        <Grid container spacing={3}>
          {
          filterBooks.map(book => {
            return (
              <Grid item 
              key={book.id}
              xs={12} md={6} lg={4}>
                <NoteCard note={book.data()}    dataID={book.id}/>
              </Grid>
            )
          })
          }
        </Grid>
      </Container> }

    </>

  )
  };

  export default Notes;
