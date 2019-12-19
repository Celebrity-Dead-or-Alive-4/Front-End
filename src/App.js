import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Register from './components/Register.js';
import './App.css';


function App() {
  return (
    <div className="App">
      <h1>App is running</h1>
      <BrowserRouter>
<Route exact path="/register" component={Register}/>
</BrowserRouter>
    </div>
  );
}

export default App;
