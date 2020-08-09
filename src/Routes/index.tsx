import React, { FC } from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';
import Home from '../pages/Home';
import PetDetails from '../pages/PetDetails';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import NewPet from '../pages/NewPet';

const Routes: FC = () => (
  <Switch>
    <Route path="/signin" component={SignIn} />
    <Route path="/register" component={SignUp} />
    <Route path="/" exact component={Home} isPrivate />
    <Route path="/details/:petId" component={PetDetails} isPrivate />
    <Route path="/new-pet" component={NewPet} isPrivate />
  </Switch>
);

export default Routes;
