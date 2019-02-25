import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Patients = new Mongo.Collection('patients');

if (Meteor.isServer) {
    Meteor.publish('patients', function () {
        return Notes.find({ userId: this.userId });
    });
}

Meteor.methods({
    'patients.add'(patient) {
        if (!this.userId && !Roles.userIsInRole(this.userId, 'admin')) {
            throw new Meteor.Error('not-authorized');
        }

        return Patients.insert({
            ...patient
        });
    }
});