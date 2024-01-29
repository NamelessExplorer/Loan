import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { LoginForm } from './LoginForm.jsx';

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LoginForm />
        </Route>
      </Switch>
    </Router>
  );
}