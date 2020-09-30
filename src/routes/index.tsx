import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Route from './Route';
import Login from '../pages/Login';
import Preferences from '../pages/Preferences';
import Messages from '../pages/Messages';
import GenericDates from '../pages/GenericDates';
import AcceptInvites from '../pages/AcceptInvites';

const Accept: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30,
      }}
    >
      <a
        style={{
          height: 46,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          backgroundColor: '#65c4b0',
          textAlign: 'center',
          textDecoration: 'none',
        }}
        href="app-memoria://AcceptInvites"
      >
        <strong style={{ color: '#fff' }}>Abir Convite</strong>
      </a>
    </div>
  );
};

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Login} />
      <Route path="/accept-invites" exact component={AcceptInvites} />
      <Route path="/accept" exact component={Accept} />

      <Route path="/dashboard" component={Preferences} isPrivate />
      <Route path="/messages" component={Messages} isPrivate />
      <Route path="/generic-dates" component={GenericDates} isPrivate />
    </BrowserRouter>
  );
};

export default Routes;
