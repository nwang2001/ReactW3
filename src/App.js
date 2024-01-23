import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import Easy from './components/Easy'
import Medium from './components/Medium'
import Hard from './components/Hard'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Easy" element={<Easy />} />
            <Route path="/Medium" element={<Medium />} />
            <Route path="/Hard" element={<Hard />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;