import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import Dashboard from '../ui/Dashboard';
import ForgotPassword from '../ui/ForgotPassword';
import Home from '../ui/Home';
import RegisterPatients from '../ui/RegisterPatients';
import Login from '../ui/Login';
import LayoutRoute from './LayoutRoute';
import NotFound from '../ui/NotFound';
import Signup from '../ui/Signup'
import PatientSearch from '../ui/PatientSearch';
import ResetPassword from '../ui/ResetPassword';

export const history = createBrowserHistory();

export const routes = (
    <Router history={history}>
        <Switch >
            <Route exact path="/" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/reset-password/:token" component={ResetPassword} />
            <Route exact path="/forgotPassword" component={ForgotPassword} />
            <LayoutRoute exact path="/home"  layout={Dashboard} component={Home}/>
            <LayoutRoute exact path="/registerPatients" layout={Dashboard} component={RegisterPatients}/>
            <LayoutRoute exact path="/searchPatients" layout={Dashboard} component={PatientSearch}/>
            <Route path="/*" component={NotFound} />
        </Switch>
    </Router>
);