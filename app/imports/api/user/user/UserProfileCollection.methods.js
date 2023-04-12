import { Meteor } from 'meteor/meteor';
import { CallPromiseMixin } from 'meteor/didericis:callpromise-mixin';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { UserProfiles } from './UserProfileCollection';

export const signUpNewUserMethod = new ValidatedMethod({
  name: 'UserProfiles.SignupNewUser',
  mixins: [CallPromiseMixin],
  validate: null,
  run(data) {
    if (Meteor.isServer) {
      UserProfiles.define(data);
    }
  },
});

export const removeUserMethod = new ValidatedMethod({
  name: 'UserProfiles.RemoveIt',
  mixins: [CallPromiseMixin],
  validate: null,
  run(profileID) {
    if (Meteor.isServer) {
      UserProfiles.removeIt(profileID);
    }
  },
});
