import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Patients } from '../api/patients';

export default class Appointment extends React.Component {

    state = {
        patient: {

        }
    }


    componentDidMount = () => {
        this.setState({patient: this.props.location.state.patient});
    }


    render = () => {
        return (
            <div id="appointment-root">
                <p> {this.state.patient.name} {this.state.patient.id} </p>
            </div>
        )
    }
}
