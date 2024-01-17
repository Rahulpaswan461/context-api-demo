// App.js
import React from 'react';
import { CounterProvider } from './CounterContext';
import Counter from './Counter';
import './App.css'

function App() {
  return (
    <CounterProvider>
      <div className="App">
        <Counter />
      </div>
    </CounterProvider>
  );
}

export default App;
