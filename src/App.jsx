import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ExapandingCard from './sections/expandingCard/ExapandingCard';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/part/1" component={ExapandingCard} />
      </Switch>
    </Router>
  );
};

export default App;
