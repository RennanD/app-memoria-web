import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Route from './Route';
import Login from '../pages/Login';
import Preferences from '../pages/Preferences';
import Messages from '../pages/Messages';
import GenericDates from '../pages/GenericDates';
import AcceptEnvites from '../pages/AcceptEnvites';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Login} />
      <Route path="/AcceptEnvites" exact component={AcceptEnvites} />

      <Route path="/dashboard" component={Preferences} isPrivate />
      <Route path="/messages" component={Messages} isPrivate />
      <Route path="/generic-dates" component={GenericDates} isPrivate />
    </BrowserRouter>
  );
};

export default Routes;
