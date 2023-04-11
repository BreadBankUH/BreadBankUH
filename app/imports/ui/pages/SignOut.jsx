import React from 'react';
import { Meteor } from 'meteor/meteor';
import Landing from './Landing';

/* After the user clicks the "SignOut" link in the NavBar, log them out and display this page. */
const SignOut = () => {
  Meteor.logout();
  return (
    <Landing />
  );
};

export default SignOut;
