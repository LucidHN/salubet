import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export const Patients = new Mongo.Collection('patients');

if (Meteor.isServer) {
    Meteor.publish('patients', function () {
        return Patients.find({});
    });
}

Meteor.methods({
    'patients.add'(patient) {
        if (!this.userId && !Roles.userIsInRole(this.userId, 'admin')) {
            throw new Meteor.Error('not-authorized');
        }
        new SimpleSchema({
            name: {
                required: true,
                type: String,
                min: 1
            },
            birthDate: {
                required: true,
                type: Number,
                min: 1
            },
            id: {
                required: true,
                type: String,
                min: 13,
                max: 13,

            }
        }).validate({
            name: patient.name,
            birthDate: parseInt(patient.birthDate),
            id: patient.id
        });
        return Patients.insert({
            ...patient
        });
    }
});