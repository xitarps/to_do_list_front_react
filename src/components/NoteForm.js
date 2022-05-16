import React from "react";
import './NoteForm.css';

const NoteForm = () => {
  return (
    <div>
      <h2>Add a note</h2>
      <div>
        <p>
          <label className="form-input-and-label">
            <span>
              Title:
            </span>
            <input type="text" name="title" />
          </label>
        </p>

        <p>
          <label className="form-input-and-label">
            Description:
            <textarea name="description" id="txtArea" rows="5" cols="20"></textarea>
          </label>
        </p>

        <p>
          <label className="form-input-and-label">
            Resolving Date:
            <input type="datetime-local" name="resolving_date" />
          </label>
        </p>

        <p>
          <button type="submit" value="Submit"> Salvar</button>
        </p>
      </div>
    </div>
  );
}

export default NoteForm;