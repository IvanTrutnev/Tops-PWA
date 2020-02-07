import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [date, setDate] = useState('');
  console.log(date)
  return (
    <div className="App">
      <header className="App-header">
        <input type="date" onChange={(e) => setDate(e.target.value)}/>
      </header>
    </div>
  );
}

export default App;
