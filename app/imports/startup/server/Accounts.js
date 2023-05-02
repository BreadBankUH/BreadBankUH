import { Meteor } from 'meteor/meteor';
import { ROLE } from '../../api/role/Role';
import { AdminProfiles } from '../../api/user/admin/AdminProfileCollection';
import { UserProfiles } from '../../api/user/user/UserProfileCollection';

/* eslint-disable no-console */

const createUser = (data) => {
  console.log(`  Creating user ${data.email} with role ${data.role}.`);
  if (data.role === ROLE.ADMIN) {
    AdminProfiles.define(data);
  } else if (data.role === ROLE.USER) { // if user signs up as a volunteer
    UserProfiles.define(data);
  }
};

// When running app for first time, pass a settings file to set up a default user account.
if (Meteor.users.find().count() === 0) {
  if (Meteor.settings.defaultAccounts) {
    console.log('Creating the default user(s)');
    Meteor.settings.defaultAccounts.forEach(({ email, password, role }) => createUser(email, password, role));
  } else {
    console.log('Cannot initialize the database!  Please invoke meteor with a settings file.');
  }
}
