// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

import Notes from './components/Notes';
import NoteForm from './components/NoteForm';

function App() {
  // const URL = 'http://127.0.0.1:3000/api/v1/notes';
  const URL = 'https://to-do-list-back-ruby-on-rails.herokuapp.com/api/v1/notes';

  const [notes, setNotes] = useState([])

  const getNotes = () => {
    return(
      fetch(URL, {
        methods: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => response.json())
    )
  }

  useEffect(() => {
    getNotes().then(data => setNotes(data))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>To-do List</h1>
      </header>
      <main className="App-main">
        <NoteForm notes={notes} setNotes={setNotes} />
        <hr/>
        <Notes notes={notes} setNotes={setNotes}/>
      </main>
    </div>
  );
}

export default App;
