import { Container, Grid} from '@material-ui/core';
import React, { useState, useEffect, useContext } from 'react';
import Masonry from 'react-masonry-css';

import { AppContext } from '../context/AppContext'

import NoteCard from '../components/NoteCard';

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const { filter, changeFilter } = useContext(AppContext);

  const API_URL = filter 
    ? `http://localhost:8000/notes?category=${filter}` 
    : "http://localhost:8000/notes"

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => setNotes(data.reverse()))
      .then(console.log('renderuje notsy'))
  }, [filter]);

  const handleDelete = async (id) => {
    await fetch("http://localhost:8000/notes/" + id, {
      method: "DELETE"
    });

    const newNotes = notes.filter(note => note.id != id);
    setNotes(newNotes);
  };

  const breakpoints = {
    default: 3,
    1280: 2,
    960: 1,
  }

  return (
    // <Container>
    //   <Grid container spacing={3}>
    //     {notes.map(note => (
    //       <Grid item key={note.id} xs={12} md={6} lg={4}>
    //         <NoteCard note={note} handleDelete={handleDelete}/>
    //       </Grid>
    //     ))}
    //   </Grid>
    // </Container>

    <Container>
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
        >
        {notes.map(note => (
          <div item key={note.id}>
            <NoteCard note={note} handleDelete={handleDelete}/>
          </div>
        ))}
      </Masonry>
    </Container>

  )
  };

  export default Notes;
