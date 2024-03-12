// index.js or App.js

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import CardExplorer from './App.js'; // Import the main component
import './index.css'; // Import your CSS file

ReactDOM.render(
  <Router>
    <CardExplorer />
  </Router>,
  document.getElementById('root')
);
