import React from 'react';
import { Accounts } from 'meteor/accounts-base';

import MainSidebar from './MainSidebar';
import PatientSidebar from './PatientSidebar';

export default class Dashboard extends React.Component {
    state = {
        patientSidebar: false,
        mainSidebar: true,
        activebar:false
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
                                    <a className="nav-link" >Inicio</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" onClick={this.changeToPatientSidebar}>Pacientes</a>
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
                                            <span>Toggle Sidebar</span>
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
                    <div className = " mt-3 ml-3">
                        {this.props.children}
                    </div>
                    
                </div>
            </div>
        );
    }
}