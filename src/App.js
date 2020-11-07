import React from 'react';
import Nav from './components/Nav';
import Routes from './routes';
import './App.css';
import './reset.css';
import './css/styles.css';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes/>
    </div>
  );
}

export default App;
