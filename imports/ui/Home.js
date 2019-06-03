import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';

export class Home extends React.Component {
    render () {
        return (
            <div className="home-container">
                <h2 className = "title-patients text-center">Bienvenido(a) Dr. { this.props.user ? this.props.user.profile.name : null }</h2>
            </div>
        );
    }
};

export default withTracker(() => ({
    user: Meteor.user()
}))(Home);