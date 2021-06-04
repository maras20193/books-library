import { Container, Grid} from '@material-ui/core';
import React, { useState, useEffect, useContext } from 'react';
import Masonry from 'react-masonry-css';

import { AppContext } from '../context/AppContext'

import NoteCard from '../components/NoteCard';
import Loader from '../components/Loader';
import { useData } from '../hooks/useData'
import { db } from '../firebase';

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [isPending, setIsPending] = useState(true)
  const { filter } = useContext(AppContext);
  const { books } = useData();

  const API_URL = filter 
    ? `http://localhost:8000/notes?primaryCategory=${filter}` 
    : "http://localhost:8000/notes"

  useEffect(() => {
      fetch(API_URL)
      .then(response => response.json())
      .then(data => {
        setNotes(data.reverse())
        setIsPending(false)
      })
  }, [filter]);






  // const handleDelete = async (id) => {
  //   await fetch("http://localhost:8000/notes/" + id, {
  //     method: "DELETE"
  //   });

  //   const newNotes = notes.filter(note => note.id != id);
  //   setNotes(newNotes);



  // };

  // const realTimeData = () => {
  //   db
  //   .collection(`users/${currentUser.uid}/books`)
  //   .orderBy('timeStamp')
  // }

  const reverseBooks = [...books].reverse();

  return (
    <>
    {/* {isPending && <Loader/>} */}
    {books && 
    <Container>
      <Grid container spacing={3}>
        {/* {notes.map(note => (
          <Grid item key={note.id} xs={12} md={6} lg={4}>
            <NoteCard note={note} handleDelete={handleDelete}/>
          </Grid>
        ))} */}
        {reverseBooks.map(book => {
          return (
            <Grid item 
            key={book.id}
            xs={12} md={6} lg={4}>
              <NoteCard note={book.data()}    dataID={book.id}/>
            </Grid>
          )
        })}
      </Grid>
    </Container>}
    </>

  )
  };

  export default Notes;
