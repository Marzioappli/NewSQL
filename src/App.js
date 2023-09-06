import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Frontend/Home';
import About from './Frontend/About';
import Patienten from './Frontend/Patienten';
import Angebote from  './Frontend/Angebote';
import './App.css';

function App() {
  const [accessCode, setAccessCode] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAccessCodeChange = (event) => {
    setAccessCode(event.target.value);
  };

  const handleAccessSubmit = () => {
    if (accessCode === 'krankenhaus') {
      setIsAuthenticated(true);
    }
  };

  return (
    <div>
      <Router>
        <div className="navbar">
          <div className="navbar-logo">
            <img src='https://mein-sicheres-krankenhaus.de/wp-content/uploads/2022/07/Logo-Mein-sicheres-Krankenhaus-weiss-rot-final.png' alt="Krankenhaus ZLI" />
          </div>
          <ul className="navbar-links">
            <li className="nav">
              <Link to="/" className="navto">
                Home
              </Link>
            </li>
            <li className="nav">
              <Link to="/about" className="navto">
                Über uns
              </Link>
            </li>
            <li className="nav">
              <Link to="/angebote" className="navto">
                Angebote
              </Link>
            </li>
            <li className="nav">
              <Link
                to="/patienten"
                className="navto"
                onClick={() => setIsAuthenticated(false)} // Setzt isAuthenticated auf false, wenn auf Daten geklickt wird.
              >
                Daten
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/angebote" element={<Angebote />} />
            <Route
              path="/patienten"
              element={isAuthenticated ? <Patienten /> : <AccessForm accessCode={accessCode} handleAccessCodeChange={handleAccessCodeChange} handleAccessSubmit={handleAccessSubmit} />}
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

function AccessForm({ accessCode, handleAccessCodeChange, handleAccessSubmit }) {
  return (
    <div className="access-form">
      <p className='titel'><strong>Geben Sie das geheime Wort ein, um auf vertrauliche Daten zuzugreifen:</strong></p>
      <input
        type="password"
        placeholder="Geheimes Wort"
        value={accessCode}
        onChange={handleAccessCodeChange}
      />
      <button className='datenbutton' onClick={handleAccessSubmit}>Bestätigen</button>
    </div>
  );
}

export default App;
