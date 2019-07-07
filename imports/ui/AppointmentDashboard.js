import React from 'react';
import { Accounts } from 'meteor/accounts-base';
import { Route } from 'react-router-dom'
import MainSidebar from './MainSidebar';
import PatientSidebar from './PatientSidebar';

export default class zDashboard extends React.Component {
    state = {
        patient: {

        },
        patientSidebar: false,
        mainSidebar: true,
        activebar:false
    }


    componentDidMount = () => {
        this.setState({patient: this.props.location.state.patient});
    }
    renderSidebar = () => {
        if(this.state.mainSidebar){
            return(
                <MainSidebar/>
            );
        }else if(this.state.patientSidebar){
            return(
                <PatientSidebar/>
            );
        }else{
            return(
                <div>ERROR</div>
            );
        }
    }
    changeToPatientSidebar = () => {
        if(!this.state.activebar){
            this.setState({
                patientSidebar:true,
                mainSidebar:false
            });
            
        }
    }
    changeToMainSidebar = () => {
        if(!this.state.activebar){
            this.setState({
                patientSidebar:false,
                mainSidebar:true
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






                
                {/* <nav className="navbar navbar-expand-lg navbar-light  nav-white-background">
                    <div className="container-fluid">
                        <button onClick={this.handleToggle} type="button" id="sidebarCollapse" className="btn btn-info">
                            <span>Toggle Sidebar</span>
                        </button>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" onClick={this.changeToPatientSidebar}>Pacientes</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={this.changeToMainSidebar}>Expedientes</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={() => Accounts.logout()}>Logout</a>
                            </li>
                        </ul>
                    </div>
                </nav> */}
                {this.renderSidebar()}
                <div id="content">
                    <form>
                        {/* seccion de antecedentes */}
                        <div className="form-group">
                            <label for="antecedentes">antecedentes</label>
                            <textarea className="form-control" id="antecedentes" rows="3"></textarea>
                        </div>
                        {/* seccion de consultas */}

                        <div className="form-group">
                            <label for="signos-vitales-antropometria">signos-vitales-antropometria</label>
                            <textarea className="form-control" id="signos-vitales-antropometria" rows="3"></textarea>
                        </div>
                        <div className="form-group">
                            <label for="tratamiento-receta">tratamiento-receta</label>
                            <textarea className="form-control" id="tratamiento-receta" rows="3"></textarea>
                        </div>
                        <div className="form-group">
                            <label for="examenes">examenes</label>
                            <textarea className="form-control" id="examenes" rows="3"></textarea>
                        </div>
                        <div className="form-group">
                            <label for="analisis">analisis</label>
                            <textarea className="form-control" id="analisis" rows="3"></textarea>
                        </div>
                        <div className="form-group">
                            <label for="diagnostico">diagnostico</label>
                            <textarea className="form-control" id="diagnostico" rows="3"></textarea>
                        </div>

                        {/* seccion de examenes y laboratorios */}

                        <div className="form-group">
                            <label for="analisis-laboratorio">analisis-laboratorio</label>
                            <textarea className="form-control" id="analisis-laboratorio" rows="3"></textarea>
                        </div>
                        <div className="form-group">
                            <label for="diagnostico-laboratorio">diagnostico-laboratorio</label>
                            <textarea className="form-control" id="diagnostico-laboratorio" rows="3"></textarea>
                        </div>

                        
                        
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}