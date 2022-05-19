import React from 'react';
import './Notes.css';

const Notes = (props) => {

  const deleteNote = (id) => {
    const URL = 'http://127.0.0.1:3000/api/v1/notes/' + id;
    // const URL = 'https://to-do-list-back-ruby-on-rails.herokuapp.com/api/v1/notes/' + id;

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

  // const editNote = (id) => {
  //   const URL = 'http://127.0.0.1:3000/api/v1/notes/' + id;
  //   // const URL = 'https://to-do-list-back-ruby-on-rails.herokuapp.com/api/v1/notes/' + id;

  //   fetch(URL, {
  //     method: 'PATCH',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({ note: props.notes.find(note => note.id === id) }) TODO <=======================
  //   }).then(response => response.json())
  //     .then(data => {
  //       props.setNotes(
  //         props.notes.map(note => {
  //           if (note.id === data.id) {
  //             return data
  //           } else {
  //             return note
  //           }
  //         })
  //       );
  //     }
  //   )
  // }

  return(
    <>
      <h2>Notes</h2>
      <div className='notes-list'>
        {
          props.notes.map(note => {
            return(
              <div key={note.id}>
                {/* <span className='close-cross' onClick={() => editNote(note.id)} >✑</span> |  */}
                <span className='close-cross' onClick={() => deleteNote(note.id)} >✖</span>
                <h3 className="note-title">{note.title} </h3>
                <p>{note.description}</p>
                <p><strong>{new Date(note.resolving_date).toLocaleString("pt-BR", {timeZone: "UTC"})}</strong></p>
              </div>
            )
          })
        }
      </div>
    </>
  )
};

export default Notes;