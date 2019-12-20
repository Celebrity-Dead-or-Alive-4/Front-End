import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginAction, registerAction } from './utils/actions'
import './App.css';

import Login from './components/Login';

function App() {

  const handleLogin = () => {

  }

  const handleRegister = () => {

  }

  return (
    <div className="App">
      <h1>App is running</h1>
      <Route path="/login" component={Login} />
    </div>
  );
}

function mapStateToProps(state) {
  return state
}

const mapDispatchToProps = {
  loginAction : loginAction,
  registerAction : registerAction
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
