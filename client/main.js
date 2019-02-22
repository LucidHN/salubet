import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import { routes } from '../imports/routes/routes';

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('app'));
});