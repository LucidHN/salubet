import React from 'react';

import Home from './Home';
import RegisterPatients from './RegisterPatients';

export default class Dashboard extends React.Component {
    state = {
        sidebar: 'inactive',
        patientSidebar: false,
        recordSidebar: false,
        mainSidebar: true
    }


    componentDidMount() {
        $("#sidebar").mCustomScrollbar({
            theme: "minimal"
        });
    }

    handleToggle() {
        this.setState({ sidebar: 'active' }, () => {
            $('#sidebar').toggleClass('active');
            $('#content').toggleClass('active');
            $('.collapse.in').toggleClass('in');
            $('a[aria-expanded=true]').attr('aria-expanded', 'false');
        });

    }
    render() {
        return (
            <div className="wrapper">
                <nav id="sidebar">
                    <div className="sidebar-header">
                        <h3>Dr. Matamoros</h3>
                    </div>
                    <ul className="list-unstyled components bar">
                        <p className="bar">San Felipe</p>

                        <li className="bar">
                            <a className="bar" href="#">Motivo de Consulta</a>
                        </li>
                        <li className="bar">
                            <a href="#records" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle bar">Antecedentes</a>
                            <ul className="collapse list-unstyled bar" id="records">
                                <li className="bar">
                                    <a className="bar" href="#">Antecedentes personales patológicos</a>
                                </li>
                                <li className="bar">
                                    <a className="bar" href="#">Antecedentes personales no patológicos</a>
                                </li>
                                <li className="bar">
                                    <a className="bar" href="#">Antecedentes heredo familiares</a>
                                </li>
                                <li className="bar">
                                    <a className="bar" href="#">Antecedentes quirúrgicos o traumáticos</a>
                                </li>
                                <li className="bar">
                                    <a className="bar" href="#">Antecedentes de salud sexual y reproductiva (mujeres)</a>
                                </li>
                                <li className="bar">
                                    <a className="bar" href="#">Antecedentes perinatales</a>
                                </li>
                                <li className="bar">
                                    <a className="bar" href="#">Antecedentes laborales</a>
                                </li>
                            </ul>
                        </li>
                        <li className="bar">
                            <a className="bar" href="#">Examen físico</a>
                        </li>
                        <li className="bar">
                            <a className="bar" href="#">Antropometría y Signos vitales</a>
                        </li>
                        <li className="bar">
                            <a className="bar" href="#">Diágnostico</a>
                        </li>
                        <li className="bar">
                            <a className="bar" href="#">Análisis</a>
                        </li>
                    </ul>
                </nav>
                <div id="content">
                    <nav className="navbar navbar-expand-lg navbar-light  nav-white-background">
                        <div className="container-fluid">
                            <button onClick={this.handleToggle.bind(this)} type="button" id="sidebarCollapse" className="btn btn-info">
                                <span>Toggle Sidebar</span>
                            </button>
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Pacientes</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Expedientes</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <div className="container">
                            { this.props.children }
                    </div>
                </div>
            </div>
        );
    }
}