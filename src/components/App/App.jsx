import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Shell from '../Shell';
import AccountsRoute from '../../routes/AccountsRoute';
import AccountRoute from '../../routes/AccountRoute';

const App = () => {
  return (
    <Router>
      <Shell>
        <Switch>
          <Route exact path="/account/:id/" component={AccountRoute} />
          <Route exact path="/" component={AccountsRoute} />
        </Switch>
      </Shell>
    </Router>
  );
};

export default App;
