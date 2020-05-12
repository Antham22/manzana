import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { AuthContextProvider } from '../context/AuthContext';
import PrivateRoute from './PrivateRoute';
import { Home, IPhone, SignIn, SignUp, Watch } from '../pages';

const App = () => {
  return (
    <main>
      <AuthContextProvider>
        <Router>
          <Switch>
            <PrivateRoute path="/" component={Home} exact />
            <Route path="/sign-in" component={SignIn} exact />
            <Route path="/sign-up" component={SignUp} exact />
            <PrivateRoute path="/iphone" component={IPhone} exact />
            <PrivateRoute path="/watch" component={Watch} exact />
          </Switch>
        </Router>
      </AuthContextProvider>
    </main>
  );
};

export default App;
