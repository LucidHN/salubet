import React from 'react';
import { Accounts } from 'meteor/accounts-base';
import { Route } from 'react-router-dom'
import MainSidebar from './MainSidebar';
import PatientSidebar from './PatientSidebar';
import { withTracker } from 'meteor/react-meteor-data';

export class AppointmentDashboard extends React.Component {
    state = {
        patient: {

        },
        patientSidebar: false,
        mainSidebar: true,
        activebar:false,
        sidebar: 'inactive'
    }


    componentDidMount = () => {
        this.setState({patient: this.props.location.state.patient});
        $("#sidebar").mCustomScrollbar({
            theme: "minimal"
        });

    }
    


    handleToggle = () => {
        this.setState({ sidebar: 'active', activebar:!this.state.activebar }, () => {
            $('#sidebar').toggleClass('active');
            $('#content').toggleClass('active');
            $('.collapse.in').toggleClass('in');
            $('a[aria-expanded=true]').attr('aria-expanded', 'false');
        });
    }

    renderConsultas = () => {

    }
    renderConsultas = () => {
        
    }
    renderConsultas = () => {
        
    }
    render() {
        return (
            <div >
                <nav className="navbar navbar-expand-lg navbar-main-color navbar-dark ">
                    
                        <a className="navbar-brand " href="#">
                            <img src='/theme_images/logo_blanco1.png' width ='60' height = '55' className = 'd-inline-block align-top' alt='Salubet Logo'></img>
                        </a>

                        <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav3">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav3">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item ">
                                    <Route render={({ history}) => (
                                        <a className="nav-link" onClick={() => {this.changeToMainSidebar; history.push('/home') }}>Inicio</a>
                                    )} />
                                </li>
                                <li className="nav-item">
                                    <Route render={({ history}) => (
                                        <a className="nav-link" onClick={() => {this.changeToPatientSidebar; history.push('/searchPatients') }}>Pacientes</a>
                                    )} />
                                    {/* <a className="nav-link" onClick={this.changeToPatientSidebar}>Pacientes</a> */}
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" >Agenda</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" onClick={this.changeToMainSidebar}>Expedientes</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" >Contabilidad</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link  " data-toggle="dropdown">[Opciones]</a>
                                    <div className="dropdown-menu dropdown-menu-right ">
                                        <button className="dropdown-item" onClick={() => Accounts.logout()} type="button" >
                                            <span>Salir</span>
                                        </button>
                                        <button className="dropdown-item" onClick={this.handleToggle} type="button" id="sidebarCollapse" >
                                            <span>Barra lateral</span>
                                        </button>
                                        
                                    </div>
                                </li>
                                
                            </ul>
                        </div>
                    
                </nav>

                <nav id="sidebar">
                    <div className="sidebar-header sidebar-main-color">
                        <h3>Dr. { this.props.user ? this.props.user.profile.name : null }</h3>
                    </div>
                    <ul className="list-unstyled components bar">
                        <p className="bar hospital-subheader">San Felipe</p>
                        <li className="bar">
                            <a className="bar" href="#">Ficha de identificacion</a>
                        </li>
                        <li className="bar">
                            <a className="bar" href="#">Antecedentes</a>
                        </li>
                        
                        <li className="bar">
                            <a className="bar" href="#">Consulta</a>
                        </li>
                        <li className="bar">
                            <a className="bar" href="#">Examenes y laboratorios</a>
                        </li>
                        <li className="bar">
                            <a className="bar" href="#">Consultas Anteriores</a>
                        </li>
                        
                    </ul>
                </nav>
                <div id="content">
                    <form>
                        {/* seccion de antecedentes */}
                        <div className="form-group">
                            <label htmlFor="antecedentes">antecedentes</label>
                            <textarea className="form-control" id="antecedentes" rows="3"></textarea>
                        </div>
                        {/* seccion de consultas */}

                        <div className="form-group">
                            <label htmlFor="signos-vitales-antropometria">signos-vitales-antropometria</label>
                            <textarea className="form-control" id="signos-vitales-antropometria" rows="3"></textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="tratamiento-receta">tratamiento-receta</label>
                            <textarea className="form-control" id="tratamiento-receta" rows="3"></textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="examenes">examenes</label>
                            <textarea className="form-control" id="examenes" rows="3"></textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="analisis">analisis</label>
                            <textarea className="form-control" id="analisis" rows="3"></textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="diagnostico">diagnostico</label>
                            <textarea className="form-control" id="diagnostico" rows="3"></textarea>
                        </div>

                        {/* seccion de examenes y laboratorios */}

                        <div className="form-group">
                            <label htmlFor="analisis-laboratorio">analisis-laboratorio</label>
                            <textarea className="form-control" id="analisis-laboratorio" rows="3"></textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="diagnostico-laboratorio">diagnostico-laboratorio</label>
                            <textarea className="form-control" id="diagnostico-laboratorio" rows="3"></textarea>
                        </div>

                        
                        
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default withTracker(() => ({
    user: Meteor.user()
}))(AppointmentDashboard);