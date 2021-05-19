import React, { useState, useEffect } from 'react'

const Notes = () => {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    fetch("http://localhost:8000/notes")
      .then(response => response.json())
      .then(data => setNotes(data))
  }, [])

  return (
    <div>
      {notes.map(note => {
        return (
          <div key={note.id}>{note.title}</div>
        )
      })}
    </div>

  )
  }

  export default Notes
