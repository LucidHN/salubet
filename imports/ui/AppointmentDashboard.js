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
            <div className = "row">
                <div className = "col-sm-12 col-md-6 col-lg-6">
                    <div className="form-group">
                        <label htmlFor="antecedentes"><h4 className = "title-main-color">Antecedentes</h4></label>
                        <textarea className="form-control textarea-round" id="antecedentes" rows="3" value={this.state.antecedentes} onChange={(e) => this.setState({antecedentes: e.target.value})}></textarea>
                    </div>
                </div>
            </div>
            
        );
    }
    renderConsultas = () => {
        return(

            <div className = "row">
                
                <div className = "col-sm-12 col-md-4 col-lg-4">
                    <div className="form-group">
                        <label htmlFor="signos-vitales-antropometria"><h5 className = "title-main-color">Signos Vitales y Antropometría</h5></label>
                        <textarea className="form-control textarea-round" id="signos-vitales-antropometria" rows="3" value={this.state.signosVitalesAntropometria} onChange={(e) => this.setState({signosVitalesAntropometria: e.target.value})}></textarea>
                    </div>                    
                </div>

                <div className = "col-sm-12 col-md-7 col-lg-7">
                    <div className="form-group">
                        <label htmlFor="tratamiento-receta"><h5 className = "title-main-color">Tratamiento y Receta</h5></label>
                        <textarea className="form-control textarea-round" id="tratamiento-receta" rows="3" value={this.state.tratamientoReceta} onChange={(e) => this.setState({tratamientoReceta: e.target.value})}></textarea>
                    </div>                    
                </div>

                <div className = "col-sm-12 col-md-5 col-lg-5">
                    <div className="form-group">
                        <label htmlFor="examenes"><h5 className = "title-main-color">Exámenes</h5></label>
                        <textarea className="form-control textarea-round" id="examenes" rows="3" value={this.state.examenes} onChange={(e) => this.setState({examenes: e.target.value})}></textarea>
                    </div>
                </div>

                <div className = "col-sm-12 col-md-4 col-lg-3">
                    <div className="form-group">
                        <label htmlFor="analisis"><h5 className = "title-main-color">Análisis</h5></label>
                        <textarea className="form-control textarea-round" id="analisis" rows="3" value={this.state.analisis} onChange={(e) => this.setState({analisis: e.target.value})}></textarea>
                    </div>
                </div>

                <div className = "col-sm-12 col-md-3 col-lg-3">
                    <div className="form-group">
                        <label htmlFor="diagnostico"><h5 className = "title-main-color">Diagnóstico</h5></label>
                        <textarea className="form-control textarea-round" id="diagnostico" rows="3" value={this.state.diagnostico} onChange={(e) => this.setState({diagnostico: e.target.value})}></textarea>
                    </div>
                </div>
            </div>
        );
    }
    renderExamenes = () => {
        return(
            <div className = "row">
                <div className = "col-sm-12 col-md-8 col-lg-8">
                    <div className="form-group">
                        <label htmlFor="analisis-laboratorio"><h5 className = "title-main-color">Exámenes</h5></label>
                        <textarea className="form-control textarea-round" id="analisis-laboratorio" rows="3" value={this.state.analisisLab} onChange={(e) => this.setState({analisisLab: e.target.value})}></textarea>
                    </div>
                </div>
                <div className = "col-sm-12 col-md-8 col-lg-8">
                    <div className="form-group">
                        <label htmlFor="diagnostico-laboratorio"><h5 className = "title-main-color">Análisis</h5></label>
                        <textarea className="form-control textarea-round" id="diagnostico-laboratorio" rows="3" value={this.state.diagnosticoLab} onChange={(e) => this.setState({diagnosticoLab: e.target.value})}></textarea>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-main-color navbar-dark navbar-fixed ">
                    
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
                <div className="wrapper">

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
                            <li className="bar btn-sidebar-item">
                                <button type="submit" className="btn btn-success btn-round btn-sidebar-item ">Guardar</button>
                            </li>
                            
                        </ul>
                    </nav>
                    {this.state.toSearch ? <Redirect to='/searchPatients'/> : null}
                    
                    <div id="content" className = "mt-3">
                        <div className="container">

                            <form>
                                
                                {/* seccion de antecedentes */}
                                {this.state.formSection === 0 ? this.renderAntecedentes() : this.state.formSection === 1 ? this.renderConsultas() : this.renderExamenes()}
                                
                                
                                
                                

                                
                                
                                {/* <button type="submit" className="btn btn-success btn-round">Guardar</button> */}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withTracker(() => ({
    user: Meteor.user()
}))(AppointmentDashboard);