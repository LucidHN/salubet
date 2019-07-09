import React from 'react';
import { Accounts } from 'meteor/accounts-base';
import { Route, Redirect } from 'react-router-dom'
import { withTracker } from 'meteor/react-meteor-data';
import moment from 'moment';

import { Appointments } from '../api/appointments';

export class AppointmentDashboard extends React.Component {
    state = {
        patient: {

        },
        appointments: [],
        patientSidebar: false,
        mainSidebar: true,
        activebar:false,
        toSearch: false,
        sidebar: 'inactive',
        formSection: 0,
        medicalHistory: '',
        vitalSignsAnthropometry: '',
        treatmentRecipe: '',
        exams: '',
        analysis: '',
        diagnosis: '',
        analysisLab: '',
        diagnosisLab: '',
        date: moment().format(''),
        error: ''
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
        if(section === 3){
            this.props.call('appointments.search', this.state.patient.id, (error, result) => {
                if(!error){
                    console.log('Appointments: ',result);
                    this.setState({appointments: result});
                }else{
                    console.log('Error: ', error.message);
                    this.setState({appointments: [], error: error.message});
                }
            });
        }
    } 

    renderAntecedentes = () => {
        return(

            <div className = "row">
                <div className = "col-sm-12 col-md-6 col-lg-6">
                    <div className="form-group">
                        <label htmlFor="antecedentes"><h4 className = "title-main-color">Antecedentes</h4></label>
                        <textarea className="form-control textarea-round" id="antecedentes" rows="3" value={this.state.medicalHistory} onChange={(e) => this.setState({medicalHistory: e.target.value})}></textarea>
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
                        <textarea className="form-control textarea-round" id="signos-vitales-antropometria" rows="3" value={this.state.vitalSignsAnthropometry} onChange={(e) => this.setState({vitalSignsAnthropometry: e.target.value})}></textarea>
                    </div>                    
                </div>

                <div className = "col-sm-12 col-md-7 col-lg-7">
                    <div className="form-group">
                        <label htmlFor="tratamiento-receta"><h5 className = "title-main-color">Tratamiento y Receta</h5></label>
                        <textarea className="form-control textarea-round" id="tratamiento-receta" rows="3" value={this.state.treatmentRecipe} onChange={(e) => this.setState({treatmentRecipe: e.target.value})}></textarea>
                    </div>                    
                </div>

                <div className = "col-sm-12 col-md-5 col-lg-5">
                    <div className="form-group">
                        <label htmlFor="examenes"><h5 className = "title-main-color">Exámenes</h5></label>
                        <textarea className="form-control textarea-round" id="examenes" rows="3" value={this.state.exams} onChange={(e) => this.setState({exams: e.target.value})}></textarea>
                    </div>
                </div>

                <div className = "col-sm-12 col-md-4 col-lg-3">
                    <div className="form-group">
                        <label htmlFor="analisis"><h5 className = "title-main-color">Análisis</h5></label>
                        <textarea className="form-control textarea-round" id="analisis" rows="3" value={this.state.analysis} onChange={(e) => this.setState({analysis: e.target.value})}></textarea>
                    </div>
                </div>

                <div className = "col-sm-12 col-md-3 col-lg-3">
                    <div className="form-group">
                        <label htmlFor="diagnostico"><h5 className = "title-main-color">Diagnóstico</h5></label>
                        <textarea className="form-control textarea-round" id="diagnostico" rows="3" value={this.state.diagnosis} onChange={(e) => this.setState({diagnosis: e.target.value})}></textarea>
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
                        <textarea className="form-control textarea-round" id="analisis-laboratorio" rows="3" value={this.state.analysisLab} onChange={(e) => this.setState({analysisLab: e.target.value})}></textarea>
                    </div>
                </div>
                <div className = "col-sm-12 col-md-8 col-lg-8">
                    <div className="form-group">
                        <label htmlFor="diagnostico-laboratorio"><h5 className = "title-main-color">Análisis</h5></label>
                        <textarea className="form-control textarea-round" id="diagnostico-laboratorio" rows="3" value={this.state.diagnosisLab} onChange={(e) => this.setState({diagnosisLab: e.target.value})}></textarea>
                    </div>

                </div>
            </div>
        );
    }

    renderPreviousAppointments = () => {
        return (
            <div>
                <h3>Consultas Anteriores</h3>
                <table>
                    <thead>
                        <tr>
                            <th scope="col">Fecha</th>
                            <th scope="col">Abrir Archivo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.appointments.map((appointment) => (
                            <tr key={appointment._id}>
                                <td>{appointment.date}</td>
                                <td><button className="btn btn-primary">+ Abrir Expediente</button></td>
                            </tr>
                        ))}
                    </tbody> 
                </table>
            </div>
        );
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.call('appointments.add', {
            patientId: this.state.patient.id,
            ...this.state
        }, (error) => {
            error ? this.setState({ error: error.message }) : null;
        });
        this.setState({
            formSection: 3,
            medicalHistory: '',
            vitalSignsAnthropometry: '',
            treatmentRecipe: '',
            exams: '',
            analysis: '',
            diagnosis: '',
            analysisLab: '',
            diagnosisLab: '',
            date: moment().format(''),
            error: ''
        });
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
                                <button form="appointmentForm" type="submit" className="btn btn-success btn-round btn-sidebar-item ">Guardar</button>
                            </li>
                            
                        </ul>
                    </nav>
                    {this.state.toSearch ? <Redirect to='/searchPatients'/> : null}
                    
                    <div id="content" className = "mt-3">
                        <div className="container">

                        <form id="appointmentForm" onSubmit={this.onSubmit}>

                            {this.state.formSection === 0 ? 
                                this.renderAntecedentes() 
                            : this.state.formSection === 1 ? 
                                this.renderConsultas()     
                            : this.state.formSection === 2 ?
                                this.renderExamenes()
                            :   null}

                        </form>
                        {this.state.formSection === 3 ? 
                        this.renderPreviousAppointments()
                        :   null}
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default withTracker(() =>{
    Meteor.subscribe('appointments');

    return {
        appointments: Appointments.find({}).fetch(),
        call: Meteor.call
    }
})(AppointmentDashboard);