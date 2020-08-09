import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import PetDetails from '../pages/PetDetails';

const Routes: FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/details/:petId" component={PetDetails} />
  </Switch>
);

export default Routes;
