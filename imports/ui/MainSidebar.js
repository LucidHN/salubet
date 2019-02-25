import React from 'react';

import Home from './Home';
import RegisterPatients from './RegisterPatients';

export default class MainSidebar extends React.Component {
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
                            <a className="bar" href="#">Información General</a>
                        </li>

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
                
            
        );
    }
}