import logo from './logo.svg';
import './App.css';
import Notes from './components/Notes';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>To-do List</h1>
      </header>
      <main className="App-main">
        <Notes />
      </main>
    </div>
  );
}

export default App;
