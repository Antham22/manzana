import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Home, IPhone, SignIn, SignUp } from '../pages';

const App = () => {
  return (
    <main>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/sign-in" component={SignIn} exact />
          <Route path="/sign-up" component={SignUp} exact />
          <Route path="/iphone" component={IPhone} exact />
        </Switch>
      </Router>
    </main>
  );
};

export default App;
