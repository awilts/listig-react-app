import React, { useEffect } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {

  useEffect(() => {
    const queryUrl = "https://composed-falcon-273907.ey.r.appspot.com/backend/message"
    axios.get(queryUrl)
        .then(data => console.log(data))
        .catch(err => console.log(err));
  } )

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
          lolnoob
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
