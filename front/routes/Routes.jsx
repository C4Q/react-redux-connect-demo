import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {GifContainer, GreetingsContainer} from '../containers/index';

const Routes = (props) => (
  <Router history={browserHistory}>
    <Route path='/' component={GreetingsContainer} >

    </Route>
  </Router>
);

export default Routes;
