import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ExapandingCard from './sections/expandingCard/ExapandingCard';
import SectionList from './sections/sectionList/SectionList';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/part/1" component={ExapandingCard} />
        <Route path="/" component={SectionList} />
      </Switch>
    </Router>
  );
};

export default App;
