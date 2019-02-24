import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';


export const AppRoute = ({
    isAuthenticated, 
    component: Component, 
    layout: Layout, 
    ...rest }
) => (
    <Route {...rest} render={props => (
        isAuthenticated ? (
            <Layout>
                <Component {...props} />
            </Layout>
        ) : (
            <Redirect to="/" />
            )
    )} />
);

export default withTracker(() => ({
    isAuthenticated: !!Meteor.userId()
}))(AppRoute);