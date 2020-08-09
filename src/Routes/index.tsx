import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import PetDetails from '../pages/PetDetails';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import NewPet from '../pages/NewPet';

const Routes: FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/details/:petId" component={PetDetails} />
    <Route path="/signin" component={SignIn} />
    <Route path="/register" component={SignUp} />
    <Route path="/new-pet" component={NewPet} />
  </Switch>
);

export default Routes;
