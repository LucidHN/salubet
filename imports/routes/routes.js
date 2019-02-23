import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { Meteor } from 'meteor/meteor';

import PrivateRoute from './PrivateRoute';
import Dashboard from '../ui/Dashboard';
import Login from '../ui/Login';
import Signup from '../ui/Signup'

import RegisterPatients from '../ui/RegisterPatients';
import Home from '../ui/Home';

export const history = createBrowserHistory();

export const routes = (
    <Router history={history}>
        <Switch >
            <Route exact path="/" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Dashboard> 
                <PrivateRoute exact path="/home" component={Home} />
                <PrivateRoute exact path="/registerPatients" component={RegisterPatients} />
            </Dashboard>
        </Switch>
    </Router>
);