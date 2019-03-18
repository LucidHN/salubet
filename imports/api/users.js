import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

Meteor.methods({
    'user.createUser'(user) {
        Roles.addUsersToRoles(Accounts.createUser(user), 'doctor');
    },
    async 'user.isDoctor'() {
        return await Roles.userIsInRole(Meteor.userId(), 'doctor');
    },
    async 'user.findUserByEmail'(email) {
        return await Accounts.findUserByEmail(email);
    },
    async 'user.sendResetPasswordEmail'(id) {
        return await Accounts.sendResetPasswordEmail(id)
    }
});