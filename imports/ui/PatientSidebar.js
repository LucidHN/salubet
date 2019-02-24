import React from 'react';

import Home from './Home';
import RegisterPatients from './RegisterPatients';

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
                            <a className="bar" href="#">Buscar paciente</a>
                        </li>
                        <li className="bar">
                            <a className="bar" href="#">Crear paciente</a>
                        </li>
                        <li className="bar">
                            <a className="bar" href="#">Lista de pacientes</a>
                        </li>
                        
                    </ul>
                </nav>
                
            
        );
    }
}