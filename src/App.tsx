import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { HomePage } from './components/homepage/HomePage';

function App() {
  return (
    <div className="App">
      <Header/>
      <HomePage/>
    </div>
  );
}

export default App;
