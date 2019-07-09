import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export const Appointments = new Mongo.Collection('appointments');

if (Meteor.isServer) {
    Meteor.publish('appointments', function () {
        return Appointments.find({});
    });
}

Meteor.methods({
    'appointments.add'(appointment) {
        if (!this.userId && !Roles.userIsInRole(this.userId, 'admin')) {
            throw new Meteor.Error('not-authorized');
        }
        new SimpleSchema({
            patientId: {
                required: true,
                type: String,
                min: 13,
                max: 13
            },
            medicalHistory: {
                required: false,
                type: String,
                min: 1
            },
            vitalSignsAnthropometry: {
                required: false,
                type: String,
                min: 1
            },
            treatmentRecipe: {
                required: false,
                type: String,
                min: 1
            },
            exams: {
                required: false,
                type: String,
                min: 1
            },
            analysis: {
                required: false,
                type: String,
                min: 1
            },
            diagnosis: {
                required: false,
                type: String,
                min: 1
            },
            analysisLab: {
                required: false,
                type: String,
                min: 1
            },
            diagnosisLab: {
                required: false,
                type: String,
                min: 1
            }
        }).validate({
            patientId: appointment.patientId,
            medicalHistory: appointment.medicalHistory,
            vitalSignsAnthropometry: appointment.vitalSignsAnthropometry,
            treatmentRecipe: appointment.treatmentRecipe,
            exams: appointment.exams,
            analysis: appointment.analysis,
            diagnosis: appointment.diagnosis,
            analysisLab: appointment.analysisLab,
            diagnosisLab: appointment.diagnosisLab
        });
        return Appointments.insert({
            ...appointment
        });
    },

    'appointments.search'(query) {
        if (!this.userId && !Roles.userIsInRole(this.userId, 'admin')) {
            throw new Meteor.Error('not-authorized');
        }
        return Appointments.find({ 'patientId': query } ).fetch();
    }
});