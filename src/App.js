import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Navigation from './components/Navigation'
import Register from './components/Register'
import './App.css';

import Login from './components/Login';
import Dashboard from './components/Dashboard';
import EditUser from './components/EditUser';

import Quiz from './components/Quiz';

import { TestLogin } from './components/TestLogin'
import { TestRegister } from './components/TestRegister'
import { ProtectedRoute } from './utils/ProtectedRoute'


function App(props) {

 

  return (
    <div className="App">
      <h1 className="heading">Celebrity Dead or Alive Quiz</h1>


      <Navigation />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />


      <Route path='/test-login' component={TestLogin} />
      <Route path='/edituser' component={EditUser} />

      <Route path='/quiz' component={Quiz} />

      <Route path='/test-register' component={TestRegister} />
      <ProtectedRoute path='/dashboard' component={Dashboard} />

    </div>
  );
}

function mapStateToProps(state) {
  return state
}


export default connect(mapStateToProps, {})(App);

