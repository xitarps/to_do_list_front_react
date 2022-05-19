import React from 'react';
import './Notes.css';

const Notes = (props) => {

  const deleteNote = (id) => {
    // const URL = 'http://127.0.0.1:3000/api/v1/notes/' + id;
    const URL = 'https://to-do-list-back-ruby-on-rails.herokuapp.com/api/v1/notes/' + id;

    fetch(URL, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.json())
      .then(data => {
        props.setNotes(
          props.notes.filter(note => note.id !== data.id)
        );
      }
    )
  }

  return(
    <>
      <h2>Notes</h2>
      <div className='notes-list'>
        {
          props.notes.map(note => {
            return(
              <div key={note.id}>
                <h3 className="note-title">{note.title} <span className='close-cross' onClick={() => deleteNote(note.id)} >✖</span></h3>
                <p>{note.description}</p>
                <p><strong>{note.resolving_date}</strong></p>
              </div>
            )
          })
        }
      </div>
    </>
  )
};

export default Notes;