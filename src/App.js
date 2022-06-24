import logo from './logo.svg';
import './App.css';
import RandomNumb from './components/random_numb';
import Quotes from './components/quotes';
import Svg from './components/svg';
import Game from './components/game';
import Cell from './components/cell';
import Field from './components/field';

function App() {
  return (
      <div className="App">
          <Field word="HELLO"></Field>
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
