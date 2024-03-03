import logo from './logo.svg';
import './App.css';
import Navbar from 'Navbar.js';
import'Card.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Card />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>CS 230L</h1>
        <h2>Section - 002</h2>
        <p>WVU ID: 800251333</p>
        <p>Hi, I am Leslie Lacek</p>
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
      </header>
    </div>
  );
}

export default App;
