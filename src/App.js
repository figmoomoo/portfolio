import React from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Routes from './routes';
import './App.css';
import './reset.css';
import './css/styles.css';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes/>
      <Footer/>
    </div>
  );
}

export default App;
