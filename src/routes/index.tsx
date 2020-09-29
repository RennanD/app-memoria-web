import React, { useEffect } from 'react';
import { BrowserRouter, Redirect } from 'react-router-dom';

import Route from './Route';
import Login from '../pages/Login';
import Preferences from '../pages/Preferences';
import Messages from '../pages/Messages';
import GenericDates from '../pages/GenericDates';
import AcceptInvites from '../pages/AcceptInvites';

const Accept: React.FC = () => {
  useEffect(() => {
    window.location.href =
      'https://expo.io/--/to-exp/exp%3A%2F%2Fxx-i8s.anonymous.mobile.exp.direct%3A80';
  }, []);

  return <div />;
};

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Login} />
      <Route path="/accept-invites" exact component={AcceptInvites} />
      <Route path="/teste" exact component={Accept} />

      <Route path="/dashboard" component={Preferences} isPrivate />
      <Route path="/messages" component={Messages} isPrivate />
      <Route path="/generic-dates" component={GenericDates} isPrivate />
    </BrowserRouter>
  );
};

export default Routes;
