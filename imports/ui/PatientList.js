import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';

import { Patients } from '../api/patients';

export class PatientList extends React.Component {
    renderRows = () => (
        this.props.patients.map((patient) => (
            <tr key={patient._id}>
                <th scope="row">{ patient.name }</th>
                <td>{ patient.id }</td>
                <td><button className="btn btn-success btn-round">VER EXPEDIENTE</button></td>
            </tr>
        ))
    )
    render() {
        return (
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <table className="table table-hover table-responsive">
                        <thead>
                            <tr>
                                <th scope="col">Nombre </th>
                                <th scope="col">Num. Identificacíon</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderRows()}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
};

export default withTracker(() => {
    Meteor.subscribe('patients');
    return {
        patients: Patients.find({}).fetch()
    };
})(PatientList);