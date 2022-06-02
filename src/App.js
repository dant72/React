import logo from './logo.svg';
import './App.css';
import ChessTimer from './components/chess_timer'
import RandomNumb from './components/random_numb';
import Quotes from './components/quotes';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
              <br />
              <RandomNumb min={1} max={7} />
              <br />
              <Quotes />
      </header>
    </div>
  );
}

export default App;
