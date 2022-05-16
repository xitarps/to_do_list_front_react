// import logo from './logo.svg';
import './App.css';
import Notes from './components/Notes';
import { useEffect, useState } from 'react';

function App() {
  const URL = 'http://127.0.0.1:3000/api/v1/notes';

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
        <Notes notes={notes}/>
      </main>
    </div>
  );
}

export default App;
