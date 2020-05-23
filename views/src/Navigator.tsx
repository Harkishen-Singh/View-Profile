import React, { FC } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './components/login/Login';
import Profiles from './components/profiles/Profiles';
import CreateProfile from './components/createProfile/CreateProfile';

const Navigator: FC<{}> = () => (
  <Router>
    <Switch>
      <Route exact={true} path="/" component={Login}  />
      <Route exact={true} path="/profiles" component={Profiles}  />
      <Route exact={true} path="/createProfile" component={CreateProfile}  />
    </Switch>
  </Router>
);

export default Navigator;