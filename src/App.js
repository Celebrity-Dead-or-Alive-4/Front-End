import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginAction, registerAction } from './utils/actions'
import Navigation from './components/Navigation'
import Register from './components/Register'
import './App.css';

import Login from './components/Login';
import Dashboard from './components/Dashboard';
import EditUser from './components/EditUser';

function App(props) {

  const handleLogin = (loginInput) => {
    props.loginAction(loginInput)
  }

  const handleRegister = (registerInput) => {
    props.registerAction(registerInput)
  }

  return (
    <div className="App">
      <h1>App is running</h1>
      <Route path="/login" component={Login} />

      <Route path="/navigation" component={Navigation} />
      <Route path="/register" component={Register} />
    

      <Route path='/dashboard' component={Dashboard} />
      <Route path='/edituser' component={EditUser} />
    </div>
  );
}

function mapStateToProps(state) {
  return state
}

const mapDispatchToProps = {
  loginAction: loginAction,
  registerAction: registerAction
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
