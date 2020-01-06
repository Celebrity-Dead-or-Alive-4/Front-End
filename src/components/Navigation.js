import React from 'react';
import { Link, NavLink }  from 'react-router-dom';
import "../App.css";

const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1>Celebrity Dead or Alive</h1>
        
        <NavLink  exact className="navlinks" to="/">Login</NavLink >
        
        
          <NavLink exact className="navlinks"   to="/About">Quiz</NavLink >
        
        
          <NavLink exact className="navlinks"  to="/Contact">Register</NavLink >
        
      </div>
    </div>
  );
};

export default Navigation;
