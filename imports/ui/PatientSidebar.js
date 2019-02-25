import React from 'react';
import { NavLink } from 'react-router-dom';

export default class PatientSidebar extends React.Component {
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
                        <h3>Dr. Matamoros</h3>
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
                            <a className="bar" href="#">Lista de pacientes</a>
                        </li>
                        
                    </ul>
                </nav>
        );
    }
};