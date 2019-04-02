import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Router, Route, Switch} from 'react-router-dom';
import {createBrowserHistory} from 'history';

import {
  Home,
  Artist,
  Album,
  NotFound
} from './sections';

class AppRouter extends Component {
  render() {
    return (
      <Router history={createBrowserHistory()}>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/artist/:artistName" component={Artist}/>
          <Route exact path="/album/:albumId" component={Album}/>
          <Route component={NotFound}/>
        </Switch>
      </Router>
    );
  }
}

export default connect(null, {})(AppRouter);