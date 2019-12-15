import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import store from '../../store';
import Shell from '../Shell';
import { AnalyticsView, AnalyticsProvider } from '../Analytics';
import AccountsRoute from '../../routes/AccountsRoute';
import AccountRoute from '../../routes/AccountRoute';

const App = () => {
  return (
    <Provider store={store}>
      <AnalyticsProvider>
        <AnalyticsView />
        <Router>
          <Shell>
            <Switch>
              <Route exact path="/account/:id/" component={AccountRoute} />
              <Route exact path="/" component={AccountsRoute} />
            </Switch>
          </Shell>
        </Router>
      </AnalyticsProvider>
    </Provider>
  );
};

export default App;
