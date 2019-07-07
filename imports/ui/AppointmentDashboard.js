import React from 'react';
import { Accounts } from 'meteor/accounts-base';
import { Route, Redirect } from 'react-router-dom'
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
        toSearch: false,
        sidebar: 'inactive',
        formSection: 0,
        antecedentes: '',
        signosVitalesAntropometria: '',
        tratamientoReceta: '',
        examenes: '',
        analisis: '',
        diagnostico: '',
        analisisLab: '',
        diagnosticoLab: ''
    }


    componentDidMount = () => {
        if(!this.props.location.state){
            this.setState({toSearch: true});
        }else{
            this.setState({patient: this.props.location.state.patient});
            $("#sidebar").mCustomScrollbar({
                theme: "minimal"
            });
        }
        

    }
    


    handleToggle = () => {
        this.setState({ sidebar: 'active', activebar:!this.state.activebar }, () => {
            $('#sidebar').toggleClass('active');
            $('#content').toggleClass('active');
            $('.collapse.in').toggleClass('in');
            $('a[aria-expanded=true]').attr('aria-expanded', 'false');
        });
    }

    toggleForm = (section) => {
        this.setState({formSection: section});
    } 

    renderAntecedentes = () => {
        return(

            <div className="form-group">
                <label htmlFor="antecedentes">antecedentes</label>
                <textarea className="form-control" id="antecedentes" rows="3" value={this.state.antecedentes} onChange={(e) => this.setState({antecedentes: e.target.value})}></textarea>
            </div>
        );
    }
    renderConsultas = () => {
        return(

            <div>

                <div className="form-group">
                    <label htmlFor="signos-vitales-antropometria">signos-vitales-antropometria</label>
                    <textarea className="form-control" id="signos-vitales-antropometria" rows="3" value={this.state.signosVitalesAntropometria} onChange={(e) => this.setState({signosVitalesAntropometria: e.target.value})}></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="tratamiento-receta">tratamiento-receta</label>
                    <textarea className="form-control" id="tratamiento-receta" rows="3" value={this.state.tratamientoReceta} onChange={(e) => this.setState({tratamientoReceta: e.target.value})}></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="examenes">examenes</label>
                    <textarea className="form-control" id="examenes" rows="3" value={this.state.examenes} onChange={(e) => this.setState({examenes: e.target.value})}></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="analisis">analisis</label>
                    <textarea className="form-control" id="analisis" rows="3" value={this.state.analisis} onChange={(e) => this.setState({analisis: e.target.value})}></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="diagnostico">diagnostico</label>
                    <textarea className="form-control" id="diagnostico" rows="3" value={this.state.diagnostico} onChange={(e) => this.setState({diagnostico: e.target.value})}></textarea>
                </div>
            </div>
        );
    }
    renderExamenes = () => {
        return(
            <div>

                <div className="form-group">
                    <label htmlFor="analisis-laboratorio">analisis-laboratorio</label>
                    <textarea className="form-control" id="analisis-laboratorio" rows="3" value={this.state.analisisLab} onChange={(e) => this.setState({analisisLab: e.target.value})}></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="diagnostico-laboratorio">diagnostico-laboratorio</label>
                    <textarea className="form-control" id="diagnostico-laboratorio" rows="3" value={this.state.diagnosticoLab} onChange={(e) => this.setState({diagnosticoLab: e.target.value})}></textarea>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div>
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
                            <a className="bar" href="#" onClick={() => this.toggleForm(0)}>Antecedentes</a>
                        </li>
                        
                        <li className="bar">
                            <a className="bar" href="#" onClick={() => this.toggleForm(1)}>Consulta</a>
                        </li>
                        <li className="bar">
                            <a className="bar" href="#" onClick={() => this.toggleForm(2)}>Examenes y laboratorios</a>
                        </li>
                        <li className="bar">
                            <a className="bar" href="#">Consultas Anteriores</a>
                        </li>
                        
                    </ul>
                </nav>
                {this.state.toSearch ? <Redirect to='/searchPatients'/> : null}
                <p>{this.state.patient.name}</p>
                <div id="content">
                    <form>

                        
                        {/* seccion de antecedentes */}
                        {this.state.formSection === 0 ? this.renderAntecedentes() : this.state.formSection === 1 ? this.renderConsultas() : this.renderExamenes()}
                        

                        
                        
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