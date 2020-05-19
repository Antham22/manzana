import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import { AuthContextProvider } from '../context/AuthContext';
import PrivateRoute from './PrivateRoute';
import { FourOhFour, Home, Intro, IPhone, SignIn, SignUp, Watch } from '../pages';

const App = () => {
  return (
    <AuthContextProvider>
      <Router>
        <Route
          render={({ location }) => {
            return (
              <main>
                <TransitionGroup component={null}>
                  <CSSTransition timeout={600} classNames="page" key={location.key}>
                    <Switch location={location}>
                      <PrivateRoute path="/" component={Home} exact />
                      <Route path="/sign-in" component={SignIn} exact />
                      <Route path="/sign-up" component={SignUp} exact />
                      <PrivateRoute path="/Intro" component={Intro} exact />
                      <PrivateRoute path="/iphone" component={IPhone} exact />
                      <PrivateRoute path="/watch" component={Watch} exact />
                      <FourOhFour component={FourOhFour} />
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
              </main>
            );
          }}
        />
      </Router>
    </AuthContextProvider>
  );
};

export default App;
