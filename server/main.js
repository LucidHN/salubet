import { Meteor } from 'meteor/meteor';

import '../imports/api/users';
import '../imports/api/patients';
import '../imports/startup/simple-schema-configuration.js';
import '../imports/email/emailTemplates';

Meteor.startup(() => {
  if (Meteor.isServer) {
    process.env.MAIL_URL='smtps://info%40salubet.com:Salubet123@smtp.gmail.com:465/';
  }
});
