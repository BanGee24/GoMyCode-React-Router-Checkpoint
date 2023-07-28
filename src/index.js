import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import MovieDescription from './components/MovieDescription';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/MovieDescription" element={<MovieDescription />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);