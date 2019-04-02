import React from 'react';
import {connect} from 'react-redux';
import {HashRouter, Route, Switch} from 'react-router-dom';
import {createBrowserHistory} from 'history';

import {
  Home,
  Artist,
  Album,
  NotFound
} from './sections';

class AppRouter extends React.Component {
  render() {
    return (
      <HashRouter history={createBrowserHistory()}>
        <Switch>
          <Route exact path="/" component={Home}/>
          {/*<Route exact path="/artist/:artistName" component={Artist}/>*/}
          <Route exact path="/artist/:artistId" component={Artist}/>
          <Route exact path="/album/:albumId" component={Album}/>
          <Route component={NotFound}/>
        </Switch>
      </HashRouter>
    );
  }
}

export default connect(null, {})(AppRouter);