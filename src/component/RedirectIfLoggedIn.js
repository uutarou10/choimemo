import React from 'react';
import { Redirect } from 'react-router';

const RedirectIfLoggedIn = ({
  to,
  currentUser
}) => {
  if (currentUser) {
    return <Redirect to={to} />;
  } else {
    return <React.Fragment />;
  }
}

export default RedirectIfLoggedIn;