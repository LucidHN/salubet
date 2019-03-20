import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import SimpleSchema from 'simpl-schema';

Meteor.methods({
    'user.createUser'(user) {
        new SimpleSchema({
            email: {
                required: true,
                type: String,
                regEx: SimpleSchema.RegEx.Email
            },
            password: {
                required: true,
                type: String,
                min: 8
            },
            name: {
                required: true,
                type: String,
                min: 1
            },
            medicalCenterType: {
                required: true,
                type: String,
                min: 1
            },
            medicalCenter: {
                required: true,
                type: String,
                min: 1
            }

        }).validate({
            email: user.email,
            password: user.password,
            name: user.profile.name,
            medicalCenterType: user.profile.medicalCenterType,
            medicalCenter: user.profile.medicalCenter
        });
        return Roles.addUsersToRoles(Accounts.createUser(user), 'doctor');
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