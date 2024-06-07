// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import UserManagement from './pages/UserManagement';
import BadgeManagement from './pages/BadgeManagement';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/users" component={UserManagement} />
        <Route path="/badges" component={BadgeManagement} />
        {/* Add other routes here */}
      </Switch>
    </Router>
  );
}

export default App;
