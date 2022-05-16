import React, { useState } from "react";
import './NoteForm.css';

const NoteForm = (props) => {

  const [state, setState] = useState({});

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    // const URL = 'http://127.0.0.1:3000/api/v1/notes';
    const URL = 'https://to-do-list-back-ruby-on-rails.herokuapp.com/api/v1/notes';

    return(
      fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ note: state })
      }).then(response => response.json())
        .then(data => {
          props.setNotes(
            [...props.notes, data]
          );
        })
    )
  };


  return (
    <div>
      <h2>Add a note</h2>
      <div>
        <p>
          <label className="form-input-and-label">
            <span>
              Title:
            </span>
            <input type="text" name="title" onChange={handleChange}/>
          </label>
        </p>

        <p>
          <label className="form-input-and-label">
            Description:
            <textarea name="description" id="txtArea" rows="5" cols="20" onChange={handleChange}></textarea>
          </label>
        </p>

        <p>
          <label className="form-input-and-label">
            Resolving Date:
            <input type="datetime-local" name="resolving_date" onChange={handleChange} />
          </label>
        </p>

        <p>
          <button type="submit" value="Submit" onClick={handleSubmit}> Salvar</button>
        </p>
      </div>
    </div>
  );
}

export default NoteForm;