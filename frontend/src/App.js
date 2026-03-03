import logo from './logo.svg';
import './App.css';
import ArtistList from './ArtistList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Rock & Roll Genealogy!
        </p>
      </header>
      <main>
        <ArtistList />
      </main>
    </div>
  );
}

export default App;
