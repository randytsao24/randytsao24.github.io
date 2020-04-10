import React, { Fragment } from 'react';

import './styles/App.css';
import Board from './components/Board';
import Header from './components/Header';

const App = () => (
  <div className="app-main">
    <Header />
    <Board />
  </div>
);

export default App;
