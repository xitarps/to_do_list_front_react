import React from 'react';
import './Notes.css';

const Notes = (props) => {
  return(
    <div>
      <h2>Notes</h2>
      {
        props.notes.map(note => {
          return(
            <div key={note.id}>
              <h3 className="note-title">{note.title}</h3>
              <p>{note.description}</p>
              <p><strong>{note.resolving_date}</strong></p>
            </div>
          )
        })
      }
    </div>
  )
};

export default Notes;