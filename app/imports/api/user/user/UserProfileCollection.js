import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import BaseProfileCollection from '../BaseProfileCollection';
import { ROLE } from '../../role/Role';
import { Users } from '../UserCollection';

class UserProfileCollection extends BaseProfileCollection {
  constructor() {
    super('UserProfile', new SimpleSchema({
      email: String,
      firstName: String,
      lastName: String,
      accountNumber: Number,
      ssn: Number,
      balance: { type: Number, defaultValue: 0 },
    }));
  }

  define({ email, firstName, lastName, password, accountNumber, ssn, balance }) {
    if (Meteor.isServer) {
      const username = email;
      const user = this.findOne({ email, firstName, lastName });
      if (!user) {
        const role = ROLE.USER;
        const profileID = this._collection.insert({
          email,
          firstName,
          lastName,
          accountNumber,
          ssn,
          balance,
          userID: this.getFakeUserId(),
          role,
        });
        const userID = Users.define({ username, role, password });
        this._collection.update(profileID, { $set: { userID } });
        return profileID;
      }
      return user._id;
    }
    return undefined;
  }

  removeIt(profileID) {
    if (this.isDefined(profileID)) {
      return super.removeIt(profileID);
    }
    return null;
  }

  assertValidRoleForMethod(userId) {
    this.assertValidRoleForMethod(userId, [ROLE.ADMIN, ROLE.USER]);
  }

  checkIntegrity() {
    const problems = [];
    this.find().forEach((doc) => {
      if (doc.role !== ROLE.USER) {
        problems.push(`UserProfile instance does not have a ROLE.USER: ${doc}`);
      }
    });
    return problems;
  }

  dumpOne(docID) {
    const doc = this.findDoc(docID);
    const username = doc.username;
    const email = doc.email;
    const firstName = doc.firstName;
    const lastName = doc.lastName;
    const accountNumber = doc.accountNumber;
    const ssn = doc.ssn;
    const balance = doc.balance;
    return { username, email, firstName, lastName, accountNumber, ssn, balance };
  }
}

export const UserProfiles = new UserProfileCollection();
