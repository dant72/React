import logo from './logo.svg';
import './App.css';
import RandomNumb from './components/random_numb';
import Quotes from './components/quotes';
import { Link } from "react-router-dom";
import React from 'react';

const ThemeContext = React.createContext({
    theme: 'light',
    toggleTheme: () => { },
});

class App extends React.Component {
    constructor(props) {
        super(props);

        this.toggleTheme = () => {
            this.setState(state => ({
                theme:
                    state.theme === 'dark'
                        ? 'light'
                        : 'dark'
            }));
        };

        this.state = {
            theme: 'light',
            toggleTheme: this.toggleTheme,
        };
    }
    render() {
        return (
            <ThemeContext.Provider value={this.state}>
                <Toolbar />
            </ThemeContext.Provider>
        );
    }
}

function Toolbar() {
    return (
        <ThemeContext.Consumer>
            {
                theme => (
                    <div className="App">
                            <ThemedButton />
                        <nav
                            style={{
                                borderBottom: "solid 1px",
                                paddingBottom: "1rem",
                                fontSize: "30px"
                            }}
                        >
                            <Link to="/field">Pole chudec</Link> |{" "}
                            <Link to="/game">Game</Link>
                        </nav>
                        <header className={`${theme.theme} App-header`}>
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
                )
            }
        </ThemeContext.Consumer>
    );
}

function ThemedButton () {
    return (
        <ThemeContext.Consumer>
            {({ theme, toggleTheme }) => (
                <button
                    onClick={toggleTheme} className={theme.theme}>
                    Toggle Theme
                </button>
            )}
        </ThemeContext.Consumer>
    );
}

export default App;
