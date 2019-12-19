import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <h1>App is running</h1>
      <Route path="/login" component={Login} />
    </div>
  );
}

export default App;
