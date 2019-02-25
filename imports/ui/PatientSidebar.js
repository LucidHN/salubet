import React from 'react';
import { NavLink } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';

export class PatientSidebar extends React.Component {
    state = {
        sidebar: 'inactive'
    }
    componentDidMount() {
        $("#sidebar").mCustomScrollbar({
            theme: "minimal"
        });
    }
    render() {
        return (
                <nav id="sidebar">
                    <div className="sidebar-header">
                        <h3>Dr. { this.props.user ? this.props.user.profile.name : null }</h3>
                    </div>
                    <ul className="list-unstyled components bar">
                        <p className="bar">San Felipe</p>
                        <li className="bar">
                            <NavLink className="bar" to="/home">Buscar paciente</NavLink>
                        </li>
                        <li className="bar">
                            <NavLink className="bar" to="/registerPatients">Crear paciente</NavLink>
                        </li>
                        <li className="bar">
                            <NavLink className="bar" to="/patientList">Lista de pacientes</NavLink>
                        </li>
                        
                    </ul>
                </nav>
        );
    }
};

export default withTracker(() => ({
    user: Meteor.user()
}))(PatientSidebar);